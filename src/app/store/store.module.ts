import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  TicketFeatureKey,
  ticketsReducer,
  UserFeatureKey,
  userReducer,
} from "./reducer";
import { StoreModule } from "@ngrx/store";
import { AppEffects } from "./effects";
import { EffectsModule } from "@ngrx/effects";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(TicketFeatureKey, ticketsReducer),
    StoreModule.forFeature(UserFeatureKey, userReducer),
    EffectsModule.forFeature([AppEffects]),
    MatSnackBarModule,
  ],
})
export class AppStoreModule {}
