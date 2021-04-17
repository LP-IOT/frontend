import { TestBed } from '@angular/core/testing';

import { CorrecteurService } from './correcteur.service';

describe('CorrecteurService', () => {
  let service: CorrecteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorrecteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
