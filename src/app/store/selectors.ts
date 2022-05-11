import { Dictionary } from "@ngrx/entity";
import { createSelector } from "@ngrx/store";
import { Ticket, User } from "../backend.service";
import {
  TicketFeatureKey,
  TicketState,
  UserFeatureKey,
  UserState,
} from "./reducer";

export const selectTicketState = (state: any) => state[TicketFeatureKey];
export const selectUserState = (state: any) => state[UserFeatureKey];

export const ticketEntities = () =>
  createSelector(
    selectTicketState,
    (tickets: TicketState): Dictionary<Ticket> => tickets?.entities
  );
export const tickets = () =>
  createSelector(ticketEntities(), (tickets: Dictionary<Ticket>): Ticket[] =>
    Object.values(tickets || {})
  );

export const isTicketsLoaded = () =>
  createSelector(selectTicketState, (state: TicketState): boolean =>
    Boolean(state?.loaded)
  );
export const userEntities = () =>
  createSelector(
    selectUserState,
    (users: UserState): Dictionary<User> => users?.entities
  );
export const users = () =>
  createSelector(userEntities(), (users: Dictionary<User>): User[] =>
    Object.values(users || {})
  );
export const isUsersLoaded = () =>
  createSelector(selectUserState, (state: UserState): boolean => state?.loaded);
