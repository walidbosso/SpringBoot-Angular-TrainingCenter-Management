import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscrireIndividuComponent } from './inscrire-individu.component';

describe('InscrireIndividuComponent', () => {
  let component: InscrireIndividuComponent;
  let fixture: ComponentFixture<InscrireIndividuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InscrireIndividuComponent]
    });
    fixture = TestBed.createComponent(InscrireIndividuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
