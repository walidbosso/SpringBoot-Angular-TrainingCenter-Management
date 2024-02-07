import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateFormationComponent } from './date-formation.component';

describe('DateFormationComponent', () => {
  let component: DateFormationComponent;
  let fixture: ComponentFixture<DateFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DateFormationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DateFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
