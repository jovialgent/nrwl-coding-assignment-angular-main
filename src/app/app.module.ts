import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BackendService } from "./backend.service";
import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TicketListModule } from "./ticket-list/ticket-list.module";
import { MatToolbarModule } from "@angular/material/toolbar";
import { AppStoreModule } from "./store/store.module";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { TicketDetailsModule } from "./ticket-details/ticket-details.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "", redirectTo: "/tickets", pathMatch: "full" }, // redirect to `first-component`
    ]),
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    AppStoreModule,
    BrowserAnimationsModule,
    TicketListModule,
    TicketDetailsModule,
    MatToolbarModule,
  ],
  providers: [BackendService],
  bootstrap: [AppComponent],
})
export class AppModule {}
