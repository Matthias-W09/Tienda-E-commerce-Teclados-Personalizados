import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CarruselDestacadosComponent } from './carrusel-destacados.component';

describe('CarruselDestacadosComponent', () => {
  let component: CarruselDestacadosComponent;
  let fixture: ComponentFixture<CarruselDestacadosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CarruselDestacadosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarruselDestacadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
