import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tablamultiplicarrouting } from './tablamultiplicarrouting';

describe('Tablamultiplicarrouting', () => {
  let component: Tablamultiplicarrouting;
  let fixture: ComponentFixture<Tablamultiplicarrouting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tablamultiplicarrouting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tablamultiplicarrouting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
