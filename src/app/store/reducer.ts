import { createReducer, on } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Ticket, User } from "../backend.service";
import * as TicketSystemActions from "./actions";

export const TicketFeatureKey: string = "tickets";
export interface TicketState extends EntityState<Ticket> {
  loaded: boolean;
}

export const ticketAdapter: EntityAdapter<Ticket> =
  createEntityAdapter<Ticket>();
export const initialTicketState: TicketState = ticketAdapter.getInitialState({
  loaded: false,
});

export const ticketsReducer = createReducer(
  initialTicketState,
  on(TicketSystemActions.initTicketsSuccess, (state, { tickets }) =>
    ticketAdapter.setAll(tickets, { ...state, loaded: true })
  )
);
export const UserFeatureKey: string = "user";
export interface UserState extends EntityState<User> {
  loaded: boolean;
}
export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>();
export const initialUserState: UserState = userAdapter.getInitialState({
  loaded: false,
  ids: [],
  entities: {},
});
export const userReducer = createReducer(
  initialUserState,
  on(TicketSystemActions.initUsersSuccess, (state, { users }) =>
    userAdapter.setAll(users, { ...state, loaded: true })
  )
);
