import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListPlayerComponent } from './list-player.component';
import {  inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ListPlayerComponent', () => {
  let component: ListPlayerComponent;
  let fixture: ComponentFixture<ListPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPlayerComponent ],
      imports:[RouterTestingModule,HttpClientModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
