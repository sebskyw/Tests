import { TestBed, inject } from '@angular/core/testing';

import { ListService } from './list-service.service';

describe('ListServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListService]
    });
  });

  it('should be created', inject([ListService], (service: ListService) => {
    expect(service).toBeTruthy();
  }));
});
