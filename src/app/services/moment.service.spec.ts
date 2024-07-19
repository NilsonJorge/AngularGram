import { TestBed } from '@angular/core/testing';

import { MomentService } from './momment.service';

describe('MommentService', () => {
  let service: MomentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
