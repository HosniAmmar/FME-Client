import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTeamComponent } from './list-team.component';
import {  inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ListTeamComponent', () => {
  let component: ListTeamComponent;
  let fixture: ComponentFixture<ListTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTeamComponent ],
        imports:[RouterTestingModule,HttpClientModule],
        schemas: [
          CUSTOM_ELEMENTS_SCHEMA
        ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
