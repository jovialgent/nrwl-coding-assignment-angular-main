import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { BackendService, Ticket } from "src/app/backend.service";
import { TicketListObservableService } from "./ticket-list-observable.service";
import {
  emptyTicketList,
  ITicketList,
  ITicketListItem,
} from "./ticket-list.models";
import { TicketListService } from "./ticket-list.service";

@Component({
  selector: "app-ticket-list",
  templateUrl: "./ticket-list.component.html",
  styleUrls: ["./ticket-list.component.css"],
})
export class TicketListComponent implements OnInit {
  settings$: Observable<ITicketList>;
  settings: ITicketList;
  formGroup: FormGroup;

  constructor(
    private observables: TicketListObservableService,
    private service: TicketListService
  ) {}

  ngOnInit(): void {
    this.settings = { ...emptyTicketList };
    this.formGroup = this.service.createForm();

    this.settings$ = this.observables
      .getSettings$()
      .pipe(tap((settings: ITicketList) => (this.settings = { ...settings })));
  }

  goToTicket(row: ITicketListItem): void {
    this.service.goToTicket(row);
  }

  saveTicket(): void {
    this.service.saveTicket(this.formGroup.value);
    this.formGroup.setValue({ description: "", assigneeId: -1 });
  }
}
