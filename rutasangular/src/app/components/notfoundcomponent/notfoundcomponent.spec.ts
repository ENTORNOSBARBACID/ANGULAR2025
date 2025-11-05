import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notfoundcomponent } from './notfoundcomponent';

describe('Notfoundcomponent', () => {
  let component: Notfoundcomponent;
  let fixture: ComponentFixture<Notfoundcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Notfoundcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Notfoundcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
