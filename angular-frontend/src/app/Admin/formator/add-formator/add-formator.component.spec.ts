import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFormatorComponent } from './add-formator.component';

describe('CreateEmployeeComponent', () => {
  let component: CreateFormatorComponent;
  let fixture: ComponentFixture<CreateFormatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFormatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFormatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
