import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestimonialCardComponent } from './testimonial-card.component';

describe('TestimonialCardComponent', () => {
  let component: TestimonialCardComponent;
  let fixture: ComponentFixture<TestimonialCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TestimonialCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestimonialCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
