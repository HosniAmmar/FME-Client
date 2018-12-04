import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateResponsableComponent } from './update-responsable.component';
import {FormControl,FormGroup} from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {  inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('UpdateResponsableComponent', () => {
  let component: UpdateResponsableComponent;
  let fixture: ComponentFixture<UpdateResponsableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,RouterTestingModule,HttpClientModule
      ],
      declarations: [ UpdateResponsableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
