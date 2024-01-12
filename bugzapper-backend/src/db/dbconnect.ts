import dotenv from "dotenv";
import mongoose from 'mongoose';
import {
  authorization, project,
  ticket, user
} from '../types/types';

dotenv.config();
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
export const AuthorizationModel = mongoose.model<authorization>('Authorization', new mongoose.Schema({
  permission: String,
  authorized: [String]
}));
export const UserModel = mongoose.model<user>('User', new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: String,
  email: String,
  role: String,
  suspended: Boolean,
}));
export const ProjectModel = mongoose.model<project>('Project', new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: String,
  description: String,
  members: [mongoose.Types.ObjectId],
  manager: mongoose.Types.ObjectId,
  created_at: Date,
  updated_at: Date,
  archived: Boolean
}));
export const TicketModel = mongoose.model<ticket>('Ticket', new mongoose.Schema({
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
