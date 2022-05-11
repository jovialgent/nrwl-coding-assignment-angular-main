import { Injectable } from "@angular/core";
import { combineLatest, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Ticket, User } from "src/app/backend.service";
import { StoreService } from "src/app/store/store.service";
import { TicketListMapperService } from "./ticket-list-mapper.service";
import { ITicketList } from "./ticket-list.models";

@Injectable({
  providedIn: "root",
})
export class TicketListObservableService {
  constructor(
    private store: StoreService,
    private mapper: TicketListMapperService
  ) {}

  getSettings$(): Observable<ITicketList> {
    const loaded$: Observable<boolean> = this.store.isLoaded$();
    const tickets$: Observable<Ticket[]> = this.store.getTickets$();
    const users$: Observable<User[]> = this.store.getUsers$();

    return combineLatest([loaded$, tickets$, users$]).pipe(
      map(([loaded, tickets, users]: [boolean, Ticket[], User[]]) =>
        this.mapper.mapSettings(loaded, tickets, users)
      )
    );
  }
}
