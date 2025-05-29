import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CartaCarritoComponent } from './carta-carrito.component';

describe('CartaCarritoComponent', () => {
  let component: CartaCarritoComponent;
  let fixture: ComponentFixture<CartaCarritoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CartaCarritoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartaCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
