import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menutabla } from './menutabla';

describe('Menutabla', () => {
  let component: Menutabla;
  let fixture: ComponentFixture<Menutabla>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Menutabla]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Menutabla);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
