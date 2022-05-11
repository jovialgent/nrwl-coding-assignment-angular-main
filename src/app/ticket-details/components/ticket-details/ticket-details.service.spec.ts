import { TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";

import { TicketDetailsService } from "./ticket-details.service";

describe("TicketDetailsService", () => {
  let service: TicketDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        RouterModule.forRoot([]),
        ReactiveFormsModule,
      ],
    });
    service = TestBed.inject(TicketDetailsService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
