import { TestBed } from '@angular/core/testing';

import { ServiceDepartamentos } from './service.departamentos';

describe('ServiceDepartamentos', () => {
  let service: ServiceDepartamentos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDepartamentos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
