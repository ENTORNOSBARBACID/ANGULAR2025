import { TestBed } from '@angular/core/testing';

import { Servicefiles } from './servicefiles';

describe('Servicefiles', () => {
  let service: Servicefiles;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Servicefiles);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
