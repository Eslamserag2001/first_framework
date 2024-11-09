import { TestBed } from '@angular/core/testing';

import { OurdataService } from './ourdata.service';

describe('OurdataService', () => {
  let service: OurdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OurdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
