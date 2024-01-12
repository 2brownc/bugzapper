import mongoose from 'mongoose';
import dotenv from "dotenv";

import {
  authorization,
  user,
  project,
  role,
  ticket,
  comment,
  ticketPriority
} from '../../types/types';
import { authorizationsSampleData } from './authorization';
import { usersSampleData } from './users';
import { projectsSampleData } from './projects';
import {
  ticketsProjectCosmos,
  ticketsFoodzillaApp,
  ticketsHealthTrack,
  ticketsGreenerEnergyInitiative,
  ticketsSchoolConnect,
  ticketsVibe,
  ticketsVerge,
  ticketsAscend,
  ticketsPulse
} from './tickets';

dotenv.config();

// get random user from the UsersList
const getUsersIdsByRole = (userList: user[], role: role): mongoose.Types.ObjectId[] => {
  const usersOfRole = userList.filter(user => user.role == role);
  return usersOfRole.map(user => user._id as mongoose.Types.ObjectId);
};

const getRandomUserId = (userList: any[]): mongoose.Types.ObjectId => {
  return userList[Math.floor(Math.random() * userList.length)]._id as mongoose.Types.ObjectId;
};

const getNRandomUserIds = (userList: any[], limit: number): mongoose.Types.ObjectId[] => {
  // return all the users if limit is greater than the number of users
  if (limit > userList.length) {
    return userList as mongoose.Types.ObjectId[];
  }

  const shuffledArr = [...userList].sort(() => Math.random() - 0.5);
  return shuffledArr.slice(0, limit) as mongoose.Types.ObjectId[];
};

// Connect to MONGODB

const MONGODB_URL = process.env.MONGODB_APIENDPOINT;
if (MONGODB_URL) {
  main(MONGODB_URL).catch(err => console.log(err));
} else {
  throw new Error("MONGODB_APIENDPOINT not set");
}

async function main(MONGODB_URL: string) {
  await mongoose.connect(MONGODB_URL);
}

const AuthorizationModel = mongoose.model<authorization>('Authorization', new mongoose.Schema({
  permission: String,
  authorized: [String]
}));

const UserModel = mongoose.model<user>('User', new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: String,
  email: String,
  role: String,
  suspended: Boolean,
}));

const ProjectModel = mongoose.model<project>('Project', new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: String,
  description: String,
  members: [mongoose.Types.ObjectId],
  manager: mongoose.Types.ObjectId,
  created_at: Date,
  updated_at: Date,
  archived: Boolean
}));

const TicketModel = mongoose.model<ticket>('Ticket', new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  title: String,
  description: String,
  project: mongoose.Types.ObjectId,
  eta: {
    type: Date,
    defaul: null
  },
  author: mongoose.Types.ObjectId,
  comments: Object,
  priority: String,
  status: String,
  tags: [String],
  created_at: Date,
  updated_at: Date,
}));

export async function initDB() {
  // Create the Permissions
  const permissionCount: number = await AuthorizationModel.countDocuments().exec();
  if (permissionCount == 0) {
    AuthorizationModel.insertMany(authorizationsSampleData);
  }

  // Create users
  const userCount: number = await UserModel.countDocuments().exec();
  if (userCount == 0) {
    UserModel.insertMany(usersSampleData);
    /*
      drop "projects" collection because
      they may contain users
      that are not in the sample data
    */
    ProjectModel.deleteMany();
  }

  // Create Projects
  const projectCount: number = await ProjectModel.countDocuments().exec();
  if (projectCount == 0) {
    const users = await UserModel.find({});
    if (users.length === 0) {
      throw new Error('No users found. Please seed the database with users.')
    }

    const projectData: project[] = [];
    for (const project of projectsSampleData) {
      projectData.push({
        ...project,
        manager: getRandomUserId(getUsersIdsByRole(users, 'manager')),
        members: getNRandomUserIds(getUsersIdsByRole(users, 'developer'), 3),
      });
    }

    ProjectModel.insertMany(projectData);
  }

  // Create Tickets for each Project
  const ticketCount: number = await TicketModel.countDocuments().exec();
  if (ticketCount == 0) {
    let projectTickets: ticket[] = [];
    const users: user[] = await UserModel.find({});
    const projects: project[] = await ProjectModel.find({});

    if (users.length === 0) {
      throw new Error('No users found. Please seed the database with users.')
    }
    if (projects.length === 0) {
      throw new Error('No projects found. Please seed the database with projects.')
    }

    // assigning users to tickets and insert them into projects
    const setUsersForTickets = (tickets: ticket[]): ticket[] => {
      const ticketData: ticket[] = [];
      for (const ticket of tickets) {
        const commentData = [];
        for (const comment of ticket.comments) {
          commentData.push({
            ...comment,
            author: getRandomUserId(getUsersIdsByRole(users, 'developer')),
          });
        }
        ticketData.push({
          ...ticket,
          author: getRandomUserId(getUsersIdsByRole(users, 'developer')),
          comments: commentData
        });
      }

      return ticketData
    };

    const setProjectsForTickets = (ticket: ticket, projectId: mongoose.Types.ObjectId): ticket => {
      return {
        ...ticket,
        project: projectId
      }
    };

    const setUsersandProjectIdsForTickets = (tickets: ticket[], projectId: mongoose.Types.ObjectId): ticket[] => {
      const ticketsWithUsersAndProjectId: ticket[] = [];
      const ticketsWithUsers = setUsersForTickets(ticketsProjectCosmos);
      for (const ticket of ticketsWithUsers) {
        ticketsWithUsersAndProjectId.push(setProjectsForTickets(ticket, projectId));
      }

      return ticketsWithUsersAndProjectId;
    }

    for (const project of projects) {
      switch (project.name) {
        case 'Project Cosmos':
          projectTickets = [
            ...projectTickets,
            ...setUsersandProjectIdsForTickets(ticketsProjectCosmos, project._id as mongoose.Types.ObjectId)
          ];
          break;
        case 'Foodzilla App':
          projectTickets = [
            ...projectTickets,
            ...setUsersandProjectIdsForTickets(ticketsFoodzillaApp, project._id as mongoose.Types.ObjectId)
          ];
          break;
        case 'HealthTrack':
          projectTickets = [
            ...projectTickets,
            ...setUsersandProjectIdsForTickets(ticketsHealthTrack, project._id as mongoose.Types.ObjectId)
          ];
          break;
        case 'Greener Energy Initiative':
          projectTickets = [
            ...projectTickets,
            ...setUsersandProjectIdsForTickets(ticketsGreenerEnergyInitiative, project._id as mongoose.Types.ObjectId)
          ];
          break;
        case 'SchoolConnect':
          projectTickets = [
            ...projectTickets,
            ...setUsersandProjectIdsForTickets(ticketsSchoolConnect, project._id as mongoose.Types.ObjectId)
          ];
          break;
        case 'Vibe':
          projectTickets = [
            ...projectTickets,
            ...setUsersandProjectIdsForTickets(ticketsVibe, project._id as mongoose.Types.ObjectId)
          ];
          break;
        case 'Verge':
          projectTickets = [
            ...projectTickets,
            ...setUsersandProjectIdsForTickets(ticketsVerge, project._id as mongoose.Types.ObjectId)
          ];
          break;
        case 'Ascend':
          projectTickets = [
            ...projectTickets,
            ...setUsersandProjectIdsForTickets(ticketsAscend, project._id as mongoose.Types.ObjectId)
          ];
          break;
        case 'Pulse':
          projectTickets = [
            ...projectTickets,
            ...setUsersandProjectIdsForTickets(ticketsPulse, project._id as mongoose.Types.ObjectId)
          ];
          break;
        default:
          break;
      }
    }

    TicketModel.insertMany(projectTickets);

  }

}
