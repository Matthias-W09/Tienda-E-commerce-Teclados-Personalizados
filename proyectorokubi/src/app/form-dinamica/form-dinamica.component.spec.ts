import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormDinamicaComponent } from './form-dinamica.component';

describe('FormDinamicaComponent', () => {
  let component: FormDinamicaComponent;
  let fixture: ComponentFixture<FormDinamicaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormDinamicaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormDinamicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
