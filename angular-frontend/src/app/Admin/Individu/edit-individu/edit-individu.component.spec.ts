import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIndividuComponent } from './edit-individu.component';

describe('EditIndividuComponent', () => {
  let component: EditIndividuComponent;
  let fixture: ComponentFixture<EditIndividuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditIndividuComponent]
    });
    fixture = TestBed.createComponent(EditIndividuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
