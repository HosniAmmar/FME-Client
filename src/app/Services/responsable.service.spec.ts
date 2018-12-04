
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ResponsableService } from './responsable.service';

describe('ResponsableService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
  }));
  it('should be created', () => {
    const service: ResponsableService = TestBed.get(ResponsableService);
    expect(service).toBeTruthy();
  });
});
