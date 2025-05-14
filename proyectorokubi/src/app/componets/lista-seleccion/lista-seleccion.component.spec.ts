import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SelectableListComponent } from './lista-seleccion.component';

describe('SelectableListComponent', () => {
  let component: SelectableListComponent;
  let fixture: ComponentFixture<SelectableListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SelectableListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
