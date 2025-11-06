import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hijocoche } from './hijocoche';

describe('Hijocoche', () => {
  let component: Hijocoche;
  let fixture: ComponentFixture<Hijocoche>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hijocoche]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hijocoche);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
