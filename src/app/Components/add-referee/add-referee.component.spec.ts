import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { AddRefereeComponent } from './add-referee.component';
import {
MatDividerModule,
MatToolbarModule,
MatIconModule,
MatMenuModule,
MatButtonModule
} from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

describe('AddRefereeComponent', () => {
  let component: AddRefereeComponent;
  let fixture: ComponentFixture<AddRefereeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRefereeComponent ],
      imports: [
        MatDividerModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule,
        RouterTestingModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRefereeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
