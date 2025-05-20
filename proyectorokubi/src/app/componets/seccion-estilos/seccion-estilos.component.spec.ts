import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SeccionEstilosComponent } from './seccion-estilos.component';

describe('SeccionEstilosComponent', () => {
  let component: SeccionEstilosComponent;
  let fixture: ComponentFixture<SeccionEstilosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SeccionEstilosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SeccionEstilosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
