import { createAction, props } from "@ngrx/store";
import { Ticket, User } from "../backend.service";

const createTicketActionName = (actionTitle: string): string =>
  `[Ticket] ${actionTitle}`;
const createUserActionName = (actionTitle: string): string =>
  `[User] ${actionTitle}`;

export const initTickets = createAction(createTicketActionName("init"));
export const initTicketsSuccess = createAction(
  createTicketActionName("init - success"),
  props<{
    tickets: Ticket[];
  }>()
);
export const initTicketsFail = createAction(
  createTicketActionName("init - fail"),
  props<{ error: any }>()
);
export const initUsers = createAction(createUserActionName("init"));
export const initUsersSuccess = createAction(
  createUserActionName("init - success"),
  props<{
    users: User[];
  }>()
);
export const initUserFail = createAction(
  createUserActionName("init - fail"),
  props<{ error: any }>()
);
