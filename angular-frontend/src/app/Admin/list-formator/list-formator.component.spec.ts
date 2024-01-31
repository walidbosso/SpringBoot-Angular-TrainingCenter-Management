import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListFormatorComponent } from './list-formator.component';

describe('TableListFormatorComponent', () => {
  let component: TableListFormatorComponent;
  let fixture: ComponentFixture<TableListFormatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableListFormatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableListFormatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
