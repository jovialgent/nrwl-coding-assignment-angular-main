import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { combineLatest, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Ticket, User } from "src/app/backend.service";
import { StoreService } from "src/app/store/store.service";
import { TicketDetailsMapperService } from "./ticket-details-mapper.service";
import { ITicketDetails } from "./ticket-details-models";

@Injectable({
  providedIn: "root",
})
export class TicketDetailsObservableService {
  constructor(
    private store: StoreService,
    private mapper: TicketDetailsMapperService
  ) {}

  getSettings$(route: ActivatedRoute): Observable<ITicketDetails> {
    const loaded$: Observable<boolean> = this.store.isLoaded$();
    const tickets$: Observable<Ticket[]> = this.store.getTickets$();
    const users$: Observable<User[]> = this.store.getUsers$();
    const id$: Observable<number> = route.params.pipe(
      map(({ id }: { id: string }): number => +id)
    );

    return combineLatest([loaded$, tickets$, users$, id$]).pipe(
      map(
        ([loaded, tickets, users, id]: [
          boolean,
          Ticket[],
          User[],
          number
        ]): ITicketDetails =>
          this.mapper.mapSettings(loaded, tickets, users, id)
      )
    );
  }
}
