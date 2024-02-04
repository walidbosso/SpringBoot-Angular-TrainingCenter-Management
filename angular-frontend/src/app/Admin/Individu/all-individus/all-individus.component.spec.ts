import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllIndividusComponent } from './all-individus.component';

describe('AllIndividusComponent', () => {
  let component: AllIndividusComponent;
  let fixture: ComponentFixture<AllIndividusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllIndividusComponent]
    });
    fixture = TestBed.createComponent(AllIndividusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
