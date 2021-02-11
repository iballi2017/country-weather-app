import { TestBed } from '@angular/core/testing';

import { WorldTimezoneService } from './world-timezone.service';

describe('WorldTimezoneService', () => {
  let service: WorldTimezoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldTimezoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
