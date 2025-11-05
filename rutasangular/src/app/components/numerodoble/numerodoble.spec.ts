import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Numerodoble } from './numerodoble';

describe('Numerodoble', () => {
  let component: Numerodoble;
  let fixture: ComponentFixture<Numerodoble>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Numerodoble]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Numerodoble);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
