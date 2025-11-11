import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Platillafuncionmultiple } from './platillafuncionmultiple';

describe('Platillafuncionmultiple', () => {
  let component: Platillafuncionmultiple;
  let fixture: ComponentFixture<Platillafuncionmultiple>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Platillafuncionmultiple]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Platillafuncionmultiple);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
