import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { combineLatest, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Ticket, User } from "../backend.service";
import * as TicketSystemActions from "./actions";
import * as TicketSystemSelectors from "./selectors";

@Injectable({
  providedIn: "root",
})
export class StoreService {
  constructor(private store: Store) {}

  init(): void {
    this.store.dispatch(TicketSystemActions.initTickets());
    this.store.dispatch(TicketSystemActions.initUsers());
  }

  getUsers$(): Observable<User[]> {
    return this.store.select(TicketSystemSelectors.users());
  }

  isLoaded$(): Observable<boolean> {
    return combineLatest([this.isTicketLoaded$(), this.isUserLoaded$()]).pipe(
      map((loaded: boolean[]): boolean => loaded.every((isLoaded) => isLoaded))
    );
  }

  isTicketLoaded$(): Observable<boolean> {
    return this.store.select(TicketSystemSelectors.isTicketsLoaded());
  }
  isUserLoaded$(): Observable<boolean> {
    return this.store.select(TicketSystemSelectors.isUsersLoaded());
  }

  getTickets$(): Observable<Ticket[]> {
    return this.store.select(TicketSystemSelectors.tickets());
  }
}
