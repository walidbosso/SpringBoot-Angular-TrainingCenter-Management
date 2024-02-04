import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFormatorComponent } from './update-formator.component';

describe('UpdateFormatorComponent', () => {
  let component: UpdateFormatorComponent;
  let fixture: ComponentFixture<UpdateFormatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFormatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFormatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
