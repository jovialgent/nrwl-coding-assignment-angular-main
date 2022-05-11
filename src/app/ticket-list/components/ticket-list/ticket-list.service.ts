import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ITicketListItem } from "./ticket-list.models";

@Injectable({
  providedIn: "root",
})
export class TicketListService {
  constructor(private route: Router) {}

  goToTicket(row: ITicketListItem): void {
    this.route.navigate(["tickets", row.id]);
  }
}
