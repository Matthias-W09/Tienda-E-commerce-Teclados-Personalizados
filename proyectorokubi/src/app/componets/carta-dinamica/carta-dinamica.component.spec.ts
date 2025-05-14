import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CartaDinamicaComponent } from './carta-dinamica.component';

describe('CartaDinamicaComponent', () => {
  let component: CartaDinamicaComponent;
  let fixture: ComponentFixture<CartaDinamicaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CartaDinamicaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartaDinamicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
