import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Padrecoche } from './padrecoche';

describe('Padrecoche', () => {
  let component: Padrecoche;
  let fixture: ComponentFixture<Padrecoche>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Padrecoche]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Padrecoche);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
