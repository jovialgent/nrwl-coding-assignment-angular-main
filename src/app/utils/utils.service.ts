import { Injectable } from "@angular/core";
import { Ticket, User } from "../backend.service";

@Injectable({
  providedIn: "root",
})
export class UtilsService {
  constructor() {}

  getUserFromTicket(ticket: Ticket, users: User[]): User {
    return users.find((user: User): boolean =>
      this.userMatchesTicket(ticket, user)
    );
  }
  userMatchesTicket(ticket: Ticket, user: User): boolean {
    return ticket?.assigneeId === user?.id;
  }

  getTicket(ticketId: number, tickets: Ticket[]): Ticket {
    return (
      tickets.find((ticket: Ticket) => ticket.id === ticketId) ?? {
        id: -1,
        description: "",
        assigneeId: -1,
        completed: false,
      }
    );
  }
}
