import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SeccionComentariosComponent } from './seccion-comentarios.component';

describe('SeccionComentariosComponent', () => {
  let component: SeccionComentariosComponent;
  let fixture: ComponentFixture<SeccionComentariosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SeccionComentariosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SeccionComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
