import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Personacomponent } from './personacomponent';

describe('Personacomponent', () => {
  let component: Personacomponent;
  let fixture: ComponentFixture<Personacomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Personacomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Personacomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
