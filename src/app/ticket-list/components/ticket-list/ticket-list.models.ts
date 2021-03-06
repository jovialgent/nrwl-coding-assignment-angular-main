import { Ticket, User } from "../../../backend.service";

export interface ITicketListItem extends Ticket {
  user: User;
}

export interface ITicketList {
  loaded: boolean;
  tickets: ITicketListItem[];
  columns: string[];
  users: User[];
}

export const emptyTicketList = {
  loaded: false,
  tickets: [],
  columns: ["id", "description", "user", "completed"],
  users: [],
};
