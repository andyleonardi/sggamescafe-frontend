import { TestBed } from '@angular/core/testing';

import { AdminToServerService } from './admin-to-server.service';

describe('AdminToServerService', () => {
  let service: AdminToServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminToServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
