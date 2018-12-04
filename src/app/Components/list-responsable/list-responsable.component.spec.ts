import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResponsableComponent } from './list-responsable.component';
import {  inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';


describe('ListResponsableComponent', () => {
  let component: ListResponsableComponent;
  let fixture: ComponentFixture<ListResponsableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListResponsableComponent ],
      imports:[RouterTestingModule,HttpClientModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
