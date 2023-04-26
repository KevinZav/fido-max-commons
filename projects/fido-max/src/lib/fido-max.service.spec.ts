import { TestBed } from '@angular/core/testing';

import { FidoMaxService } from './fido-max.service';

describe('FidoMaxService', () => {
  let service: FidoMaxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FidoMaxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
