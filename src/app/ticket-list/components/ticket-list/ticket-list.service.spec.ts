import { TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { RouterMockService } from "src/app/utils/router-mock.service";
import { ITicketListItem } from "./ticket-list.models";

import { TicketListService } from "./ticket-list.service";

describe("TicketListService", () => {
  let service: TicketListService;
  let row: ITicketListItem;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}), RouterModule.forRoot([]), ReactiveFormsModule],
    });
    service = TestBed.inject(TicketListService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
