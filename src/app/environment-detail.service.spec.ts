import { TestBed, inject } from '@angular/core/testing';

import { EnvironmentDetailService } from './environment-detail.service';

describe('EnvironmentDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnvironmentDetailService]
    });
  });

  it('should be created', inject([EnvironmentDetailService], (service: EnvironmentDetailService) => {
    expect(service).toBeTruthy();
  }));
});
