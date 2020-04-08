import { TestBed } from '@angular/core/testing';

import { SsoCommonService } from './sso-common.service';

describe('SsoCommonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SsoCommonService = TestBed.get(SsoCommonService);
    expect(service).toBeTruthy();
  });
});
