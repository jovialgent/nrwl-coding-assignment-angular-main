import { TestBed } from '@angular/core/testing';

import { TicketDetailsMapperService } from './ticket-details-mapper.service';

describe('TicketDetailsMapperService', () => {
  let service: TicketDetailsMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketDetailsMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
