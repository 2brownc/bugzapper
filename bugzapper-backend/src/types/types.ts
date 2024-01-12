import mongoose from 'mongoose';

export type id = mongoose.Types.ObjectId;

export type role = 'developer' | 'manager' | 'admin';

export type ticketPriority = 'high' | 'normal' | 'low';

export type ticketStatus = 'open' | 'ongoing' | 'closed' | 'wont_fix';

export type permission = 'CREATE_MANAGER'
  | 'SUSPEND_MANAGER'
  | 'REINSTATE_MANAGER'
  | 'CREATE_DEVELOPER'
  | 'SUSPEND_DEVELOPER'
  | 'REINSTATE_DEVELOPER'
  | 'CREATE_PROJECT'
  | 'ARCHIVE_PROJECT'
  | 'CREATE_TICKET'
  | 'CLOSE_TICKET';

export type authorization = {
  _id?: id;
  permission: permission;
  authorized: role[];
};

export type event = {
  _id?: id;
  title: string;
  author: user;
  description: string;
  date: Date;
};

export type user = {
  _id?: id;
  name: string;
  email: string;
  role: role;
  suspended: boolean;
};

export type comment = {
  _id?: id;
  text: string;
  date: Date;
  author?: id;
};

export type ticket = {
  _id?: id;
  title: string;
  description: string;
  project?: id;
  eta: Date | null;
  author?: id;
  comments: comment[];
  priority: ticketPriority;
  status: ticketStatus;
  tags: string[];
  events?: event[];
  created_at: Date;
  updated_at: Date;
};

export type project = {
  _id?: id;
  name: string;
  description: string;
  members?: id[];
  manager?: id;
  created_at: Date;
  updated_at: Date;
  archived: boolean;
};