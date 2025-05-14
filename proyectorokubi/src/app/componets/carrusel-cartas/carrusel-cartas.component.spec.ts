import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CarruselCartasComponent } from './carrusel-cartas.component';

describe('CarruselCartasComponent', () => {
  let component: CarruselCartasComponent;
  let fixture: ComponentFixture<CarruselCartasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CarruselCartasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarruselCartasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
