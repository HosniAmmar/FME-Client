import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  inject } from '@angular/core/testing';
import { AddResponsableComponent } from './add-responsable.component';
import { HttpClientModule } from '@angular/common/http';

describe('AddResponsableComponent', () => {
  let component: AddResponsableComponent;
  let fixture: ComponentFixture<AddResponsableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
        declarations: [AddResponsableComponent],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
