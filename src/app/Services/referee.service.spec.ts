import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RefereeService } from './referee.service';

describe('RefereeService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
  }));
  it('should be created', () => {
    const service: RefereeService = TestBed.get(RefereeService);
    expect(service).toBeTruthy();
  });
});
