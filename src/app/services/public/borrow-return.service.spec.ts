import { TestBed } from '@angular/core/testing';

import { BorrowReturnService } from './borrow-return.service';

describe('BorrowReturnService', () => {
  let service: BorrowReturnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BorrowReturnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
