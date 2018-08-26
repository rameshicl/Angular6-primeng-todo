import { TestBed, inject } from '@angular/core/testing';

import { MsgserviceService } from './msgservice.service';

describe('MsgserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MsgserviceService]
    });
  });

  it('should be created', inject([MsgserviceService], (service: MsgserviceService) => {
    expect(service).toBeTruthy();
  }));
});
