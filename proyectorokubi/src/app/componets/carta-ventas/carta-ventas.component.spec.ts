import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CartaVentasComponent } from './carta-ventas.component';

describe('CartaVentasComponent', () => {
  let component: CartaVentasComponent;
  let fixture: ComponentFixture<CartaVentasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CartaVentasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartaVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
