import { TestBed } from '@angular/core/testing';

import { RouterMockService } from './router-mock.service';

describe('RouterMockService', () => {
  let service: RouterMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
