import { TestBed } from "@angular/core/testing";
import { Router, RouterModule } from "@angular/router";
import { RouterMockService } from "src/app/utils/router-mock.service";
import { ITicketListItem } from "./ticket-list.models";

import { TicketListService } from "./ticket-list.service";

describe("TicketListService", () => {
  let service: TicketListService;
  let row: ITicketListItem;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
    });
    service = TestBed.inject(TicketListService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
