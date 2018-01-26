import { TestBed, inject } from '@angular/core/testing';

import { HttplinkService } from './httplink.service';

describe('HttplinkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttplinkService]
    });
  });

  it('should be created', inject([HttplinkService], (service: HttplinkService) => {
    expect(service).toBeTruthy();
  }));
});
