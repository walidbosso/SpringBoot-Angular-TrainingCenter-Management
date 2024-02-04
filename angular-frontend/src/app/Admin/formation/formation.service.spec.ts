import { TestBed } from '@angular/core/testing';

import { FormationService } from './formation.service';

describe('FormationService', () => {
  let service: FormationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
