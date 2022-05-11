import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap, tap } from "rxjs/operators";
import { BackendService, Ticket, User } from "../backend.service";
import * as TicketingSystem from "./actions";

@Injectable({
  providedIn: "root",
})
export class AppEffects {
  constructor(private actions$: Actions, private backEnd: BackendService) {}
  initTickets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TicketingSystem.initTickets),
      switchMap(() =>
        this.backEnd
          .tickets()
          .pipe(
            map((tickets: Ticket[]) =>
              TicketingSystem.initTicketsSuccess({ tickets })
            )
          )
      )
    )
  );
  initUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TicketingSystem.initUsers),
      switchMap(() =>
        this.backEnd
          .users()
          .pipe(
            map((users: User[]) => TicketingSystem.initUsersSuccess({ users }))
          )
      )
    )
  );
}
