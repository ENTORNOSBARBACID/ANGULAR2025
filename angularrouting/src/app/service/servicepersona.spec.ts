import { TestBed } from '@angular/core/testing';

import { Servicepersona } from './servicepersona';

describe('Servicepersona', () => {
  let service: Servicepersona;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Servicepersona);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
