import { TestBed } from "@angular/core/testing";
import { StoreModule } from "@ngrx/store";

import { StoreService } from "./store.service";

describe("StoreService", () => {
  let service: StoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
    });
    service = TestBed.inject(StoreService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
