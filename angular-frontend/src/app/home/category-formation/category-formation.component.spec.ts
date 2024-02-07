import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFormationComponent } from './category-formation.component';

describe('CategoryFormationComponent', () => {
  let component: CategoryFormationComponent;
  let fixture: ComponentFixture<CategoryFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryFormationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
