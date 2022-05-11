import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TicketDetailsRoutingModule } from "./ticket-details-routing.module";
import { TicketDetailsComponent } from "./components/ticket-details/ticket-details.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [TicketDetailsComponent],
  imports: [
    CommonModule,
    TicketDetailsRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatButtonModule,
  ],
})
export class TicketDetailsModule {}
