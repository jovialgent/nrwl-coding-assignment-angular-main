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
export const saveTicket = createAction(
  createTicketActionName("save"),
  props<{ ticketId: number; ticket: Partial<Ticket> }>()
);
export const saveTicketSuccess = createAction(
  createTicketActionName("save - success"),
  props<{ ticketId: number; ticket: Partial<Ticket> }>()
);
export const saveTicketFail = createAction(
  createTicketActionName("save - fail"),
  props<{ error: any }>()
);
export const addTicket = createAction(
  createTicketActionName("add"),
  props<{ ticket: Partial<Ticket> }>()
);
export const addTicketSuccess = createAction(
  createTicketActionName("add - success"),
  props<{ ticket: Ticket }>()
);
export const addTicketFail = createAction(
  createTicketActionName("add - fail"),
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
