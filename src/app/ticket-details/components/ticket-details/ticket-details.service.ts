import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Ticket } from "src/app/backend.service";
import { StoreService } from "src/app/store/store.service";

@Injectable({
  providedIn: "root",
})
export class TicketDetailsService {
  constructor(private _fb: FormBuilder, private store: StoreService, private _route : Router) {}

  createForm(): FormGroup {
    return this._fb.group({
      description: this._fb.control(null, [Validators.required]),
      completed: this._fb.control(false),
      assigneeId: this._fb.control(null, [Validators.required]),
    });
  }

  saveTicket(ticketId: number, ticket: Partial<Ticket>) {
    this.store.saveTicket(ticketId, ticket);
    this._route.navigate(['tickets'])
  }
}
