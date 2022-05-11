import { Injectable } from "@angular/core";
import { omit } from "lodash";
import { UtilsService } from "src/app/utils/utils.service";
import { Ticket, User } from "../../../backend.service";
import { emptyTicketDetails, ITicketDetails } from "./ticket-details-models";

@Injectable({
  providedIn: "root",
})
export class TicketDetailsMapperService {
  constructor(private utils: UtilsService) {}

  mapSettings(
    loaded: boolean,
    tickets: Ticket[],
    users: User[],
    ticketId: number
  ): ITicketDetails {
    const formData: Partial<Ticket> = this.mapSettingsForm(ticketId, tickets);

    return {
      ...emptyTicketDetails,
      formData,
      loaded,
      users,
      ticketId,
    };
  }
  mapSettingsForm(ticketId: number, tickets: Ticket[]): Partial<Ticket> {
    return omit(this.utils.getTicket(ticketId, tickets), ["id"]);
  }
}
