import type { authorization } from '../../types/types';

export const authorizationsSampleData: authorization[] = [
  {
    permission: "CREATE_MANAGER",
    authorized: ['admin']
  },
  {
    permission: "SUSPEND_MANAGER",
    authorized: ['admin']
  },
  {
    permission: "REINSTATE_MANAGER",
    authorized: ['admin']
  },
  {
    permission: "CREATE_DEVELOPER",
    authorized: ['admin', 'manager']
  },
  {
    permission: "SUSPEND_DEVELOPER",
    authorized: ['admin', 'manager']
  },
  {
    permission: "REINSTATE_DEVELOPER",
    authorized: ['admin', 'manager']
  },
  {
    permission: "CREATE_PROJECT",
    authorized: ['admin', 'manager']
  },
  {
    permission: "ARCHIVE_PROJECT",
    authorized: ['admin', 'manager']
  },
  {
    permission: "CREATE_TICKET",
    authorized: ['admin', 'manager', 'developer']
  },
  {
    permission: "CLOSE_TICKET",
    authorized: ['admin', 'manager', 'developer']
  },
];