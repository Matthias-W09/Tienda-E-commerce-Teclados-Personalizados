import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductosPrincipalPage } from './productos-principal.page';

describe('ProductosPrincipalPage', () => {
  let component: ProductosPrincipalPage;
  let fixture: ComponentFixture<ProductosPrincipalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosPrincipalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
