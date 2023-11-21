import { TestBed } from '@angular/core/testing';

import { PkPediaService } from './pk-pedia.service';

describe('PkPediaService', () => {
  let service: PkPediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PkPediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
