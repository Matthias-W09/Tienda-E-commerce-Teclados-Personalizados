import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ComentsProductComponent } from './coments-product.component';

describe('ComentsProductComponent', () => {
  let component: ComentsProductComponent;
  let fixture: ComponentFixture<ComentsProductComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ComentsProductComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComentsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
