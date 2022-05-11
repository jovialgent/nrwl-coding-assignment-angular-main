import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { ITicketDetails } from "./ticket-details-models";
import { TicketDetailsObservableService } from "./ticket-details-observable.service";
import { TicketDetailsService } from "./ticket-details.service";

@Component({
  selector: "app-ticket-details",
  templateUrl: "./ticket-details.component.html",
  styleUrls: ["./ticket-details.component.css"],
})
export class TicketDetailsComponent implements OnInit {
  settings$: Observable<ITicketDetails>;
  settings: ITicketDetails;
  formGroup: FormGroup = new FormGroup({});

  constructor(
    private service: TicketDetailsService,
    private observables: TicketDetailsObservableService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.formGroup = this.service.createForm();
    this.settings$ = this.observables.getSettings$(this.route).pipe(
      tap((settings: ITicketDetails) => (this.settings = { ...settings })),
      tap((settings: ITicketDetails) =>
        this.formGroup.setValue(settings.formData)
      )
    );
  }

  saveTicket(): void {
    this.service.saveTicket(this.settings.ticketId, this.formGroup.value);
  }
}
