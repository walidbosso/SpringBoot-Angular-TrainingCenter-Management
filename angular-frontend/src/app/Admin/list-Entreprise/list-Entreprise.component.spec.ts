import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListEntrepriseComponent } from './list-Entreprise.component';

describe('TableListEntrepriseComponent', () => {
  let component: TableListEntrepriseComponent;
  let fixture: ComponentFixture<TableListEntrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableListEntrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableListEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
