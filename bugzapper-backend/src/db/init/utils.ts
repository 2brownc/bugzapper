import mongoose from "mongoose";
import { role, user } from "../../types/types";

// get random user from the UsersList
export const getUsersIdsByRole = (userList: user[], role: role): mongoose.Types.ObjectId[] => {
  const usersOfRole = userList.filter(user => user.role == role);
  return usersOfRole.map(user => user._id as mongoose.Types.ObjectId);
}; export const getRandomUserId = (userList: any[]): mongoose.Types.ObjectId => {
  return userList[Math.floor(Math.random() * userList.length)]._id as mongoose.Types.ObjectId;
};
export const getNRandomUserIds = (userList: any[], limit: number): mongoose.Types.ObjectId[] => {
  // return all the users if limit is greater than the number of users
  if (limit > userList.length) {
    return userList.map(user => user._id) as mongoose.Types.ObjectId[];
  }

  const shuffledArr = [...userList].sort(() => Math.random() - 0.5);
  return shuffledArr.slice(0, limit).map(user => user._id) as mongoose.Types.ObjectId[];
};

