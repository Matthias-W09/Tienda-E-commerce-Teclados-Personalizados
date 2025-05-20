import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CartaDestacadoComponent } from './carta-destacado.component';

describe('CartaDestacadoComponent', () => {
  let component: CartaDestacadoComponent;
  let fixture: ComponentFixture<CartaDestacadoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CartaDestacadoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartaDestacadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
