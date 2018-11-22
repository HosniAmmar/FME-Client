import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRefereeComponent } from './add-referee.component';

describe('AddRefereeComponent', () => {
  let component: AddRefereeComponent;
  let fixture: ComponentFixture<AddRefereeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRefereeComponent ]
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
