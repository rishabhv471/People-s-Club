import { TestBed } from '@angular/core/testing';

import { AdminOnlyServicesService } from './service/admin-only-services.service';

describe('AdminOnlyServicesService', () => {
  let service: AdminOnlyServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminOnlyServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
