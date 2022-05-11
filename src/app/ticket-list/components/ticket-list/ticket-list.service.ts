import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Ticket } from "src/app/backend.service";
import { StoreService } from "src/app/store/store.service";
import { ITicketListItem } from "./ticket-list.models";

@Injectable({
  providedIn: "root",
})
export class TicketListService {
  constructor(
    private route: Router,
    private fb: FormBuilder,
    private store: StoreService
  ) {}

  goToTicket(row: ITicketListItem): void {
    this.route.navigate(["tickets", row.id]);
  }

  createForm(): FormGroup {
    return this.fb.group({
      description: this.fb.control("", [Validators.required]),
      assigneeId: this.fb.control(null, [Validators.required]),
    });
  }

  saveTicket(value: Partial<Ticket>) {
    this.store.addTicket(value);
  }
}
