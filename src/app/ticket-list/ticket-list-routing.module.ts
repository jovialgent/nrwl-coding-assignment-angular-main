import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TicketListComponent } from "./components";

const routes: Routes = [
  {
    path: "tickets",
    component: TicketListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketListRoutingModule {}
