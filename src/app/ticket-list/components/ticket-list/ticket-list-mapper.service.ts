import { Injectable } from "@angular/core";
import { Ticket, User } from "src/app/backend.service";
import { UtilsService } from "src/app/utils/utils.service";
import {
  emptyTicketList,
  ITicketList,
  ITicketListItem,
} from "./ticket-list.models";

@Injectable({
  providedIn: "root",
})
export class TicketListMapperService {
  constructor(private utils: UtilsService) {}

  mapSettings(loaded: boolean, tickets: Ticket[], users: User[]): ITicketList {
    const ticketItems: ITicketListItem[] = this.mapTicketItems(tickets, users);

    return {
      ...emptyTicketList,
      loaded,
      tickets: ticketItems,
      users
    };
  }
  mapTicketItems(tickets: Ticket[], users: User[]): ITicketListItem[] {
    return tickets.map(
      (ticket: Ticket): ITicketListItem => this.mapTicketItem(ticket, users)
    );
  }
  mapTicketItem(ticket: Ticket, users: User[]): ITicketListItem {
    const user: User = this.utils.getUserFromTicket(ticket, users);
    return {
      ...ticket,
      user,
    };
  }
}
