import { TestBed } from '@angular/core/testing';

import { TinyRTService } from './tiny-rt.service';

describe('TinyRTService', () => {
  let service: TinyRTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TinyRTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
