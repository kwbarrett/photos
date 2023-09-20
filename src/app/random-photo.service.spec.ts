import { TestBed } from '@angular/core/testing';

import { RandomPhotoService } from './random-photo.service';

describe('RandomPhotoService', () => {
  let service: RandomPhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomPhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
