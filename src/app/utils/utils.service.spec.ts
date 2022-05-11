import { TestBed } from "@angular/core/testing";
import { Ticket, User } from "../backend.service";

import { UtilsService } from "./utils.service";

describe("UtilsService", () => {
  let service: UtilsService;

  let ticket: Ticket;
  let users: User[];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilsService);
    ticket = {
      id: 1,
      assigneeId: 2,
      description: "Test",
      completed: false,
    };
    users = [
      {
        id: 2,
        name: "Bob",
      },
      {
        id: 3,
        name: "June",
      },
    ];
  });

 

  it("should find the user based on the ticket", () => {
    expect(service.getUserFromTicket(ticket, users)).toEqual(users[0]);
  });
});
