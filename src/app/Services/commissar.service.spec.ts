import { TestBed } from '@angular/core/testing';

import { CommissarService } from './commissar.service';

describe('CommissarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommissarService = TestBed.get(CommissarService);
    expect(service).toBeTruthy();
  });
});
