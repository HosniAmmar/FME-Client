import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { TeamService } from './team.service';

describe('TeamService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
  }));
  it('should be created', () => {
    const service: TeamService = TestBed.get(TeamService);
    expect(service).toBeTruthy();
  });
});
