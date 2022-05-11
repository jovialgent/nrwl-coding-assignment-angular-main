import { Ticket, User } from "src/app/backend.service";

export interface ITicketDetails {
  formData: Partial<Ticket>;
  loaded: boolean;
  users: User[];
  ticketId: number;
}

export const emptyTicketDetails: ITicketDetails = {
  loaded: false,
  formData: null,
  users: [],
  ticketId: -1,
};
