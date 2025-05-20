import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CartaComentarioComponent } from './carta-comentario.component';

describe('CartaComentarioComponent', () => {
  let component: CartaComentarioComponent;
  let fixture: ComponentFixture<CartaComentarioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CartaComentarioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartaComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
