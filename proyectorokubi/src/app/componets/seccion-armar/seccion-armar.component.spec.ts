import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SeccionArmarComponent } from './seccion-armar.component';

describe('SeccionArmarComponent', () => {
  let component: SeccionArmarComponent;
  let fixture: ComponentFixture<SeccionArmarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SeccionArmarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SeccionArmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
