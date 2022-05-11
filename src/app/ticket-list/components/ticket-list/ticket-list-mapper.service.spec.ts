import { TestBed } from '@angular/core/testing';

import { TicketListMapperService } from './ticket-list-mapper.service';

describe('TicketListMapperService', () => {
  let service: TicketListMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketListMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
