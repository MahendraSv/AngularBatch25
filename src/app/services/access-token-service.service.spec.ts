import { TestBed, inject } from '@angular/core/testing';

import { AccessTokenServiceService } from './access-token-service.service';

describe('AccessTokenServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccessTokenServiceService]
    });
  });

  it('should be created', inject([AccessTokenServiceService], (service: AccessTokenServiceService) => {
    expect(service).toBeTruthy();
  }));
});
