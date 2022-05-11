import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { BackendService, Ticket, User } from "../backend.service";
import * as TicketingSystem from "./actions";

@Injectable({
  providedIn: "root",
})
export class AppEffects {
  constructor(
    private actions$: Actions,
    private backEnd: BackendService,
    private _snackBar: MatSnackBar
  ) {}
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

  saveTicket$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TicketingSystem.saveTicket),
      switchMap(({ ticketId, ticket }) =>
        this.backEnd.update(ticketId, ticket).pipe(
          map(() => TicketingSystem.saveTicketSuccess({ ticketId, ticket })),
          tap(() =>
            this._snackBar.open(`Ticket ${ticketId} updated successfully`)
          ),
          catchError((error) => {
            this._snackBar.open(`Ticket ${ticketId} updated failed`);
            return of(TicketingSystem.saveTicketFail({ error }));
          })
        )
      )
    )
  );
  addTicket$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TicketingSystem.addTicket),
      switchMap(({ ticket }) =>
        this.backEnd.newTicket({ description: ticket.description }).pipe(
          switchMap((createdTicket: Ticket) =>
            this.backEnd.assign(createdTicket.id, ticket.assigneeId)
          ),
          tap((ticket: Ticket) =>
            this._snackBar.open(`Ticket ${ticket.description} created`)
          ),
          map((ticket: Ticket) => TicketingSystem.addTicketSuccess({ ticket })),
          catchError((error) => {
            this._snackBar.open(`You can't create a ticket at this time`);
            return of(TicketingSystem.addTicketFail({ error }));
          })
        )
      )
    )
  );
}
