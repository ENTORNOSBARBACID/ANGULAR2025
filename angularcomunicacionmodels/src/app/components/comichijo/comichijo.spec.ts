import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comichijo } from './comichijo';

describe('Comichijo', () => {
  let component: Comichijo;
  let fixture: ComponentFixture<Comichijo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Comichijo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comichijo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
