import { TestBed, inject } from '@angular/core/testing';

import { DatabaseInfoService } from './database-info.service';

describe('DatabaseInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatabaseInfoService]
    });
  });

  it('should ...', inject([DatabaseInfoService], (service: DatabaseInfoService) => {
    expect(service).toBeTruthy();
  }));
});
