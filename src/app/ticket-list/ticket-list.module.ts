import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TicketListRoutingModule } from "./ticket-list-routing.module";
import { TicketListComponent } from "./components/ticket-list/ticket-list.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { ReactiveFormsModule } from "@angular/forms";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";

@NgModule({
  declarations: [TicketListComponent],
  imports: [
    CommonModule,
    TicketListRoutingModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
  ],
})
export class TicketListModule {}
