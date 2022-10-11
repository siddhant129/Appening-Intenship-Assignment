import { TestBed } from '@angular/core/testing';

import { InputservService } from './inputserv.service';

describe('InputservService', () => {
  let service: InputservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
