import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneEntrepriseComponent } from './one-entreprise.component';

describe('OneEntrepriseComponent', () => {
  let component: OneEntrepriseComponent;
  let fixture: ComponentFixture<OneEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OneEntrepriseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OneEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
