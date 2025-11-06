import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comicpadre } from './comicpadre';

describe('Comicpadre', () => {
  let component: Comicpadre;
  let fixture: ComponentFixture<Comicpadre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Comicpadre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comicpadre);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
