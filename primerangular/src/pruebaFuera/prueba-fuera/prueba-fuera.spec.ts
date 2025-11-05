import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaFuera } from './prueba-fuera';

describe('PruebaFuera', () => {
  let component: PruebaFuera;
  let fixture: ComponentFixture<PruebaFuera>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PruebaFuera]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaFuera);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
