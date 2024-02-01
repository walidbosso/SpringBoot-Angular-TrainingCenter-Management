import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListIndividuComponent } from './list-Idividu.component';

describe('TableListIndividuComponent', () => {
  let component: TableListIndividuComponent;
  let fixture: ComponentFixture<TableListIndividuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableListIndividuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableListIndividuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
