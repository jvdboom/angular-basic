import { TestBed, inject } from '@angular/core/testing';

import { MessageStatusService } from './message-status.service';

describe('MessageStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageStatusService]
    });
  });

  it('should ...', inject([MessageStatusService], (service: MessageStatusService) => {
    expect(service).toBeTruthy();
  }));
});
