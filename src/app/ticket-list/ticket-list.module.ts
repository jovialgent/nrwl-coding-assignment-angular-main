import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TicketListRoutingModule } from "./ticket-list-routing.module";
import { TicketListComponent } from "./components/ticket-list/ticket-list.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [TicketListComponent],
  imports: [
    CommonModule,
    TicketListRoutingModule,
    MatProgressSpinnerModule,
    MatTableModule,
  ],
})
export class TicketListModule {}
