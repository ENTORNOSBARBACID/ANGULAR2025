import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Platillafuncionsimple } from './platillafuncionsimple';

describe('Platillafuncionsimple', () => {
  let component: Platillafuncionsimple;
  let fixture: ComponentFixture<Platillafuncionsimple>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Platillafuncionsimple]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Platillafuncionsimple);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
