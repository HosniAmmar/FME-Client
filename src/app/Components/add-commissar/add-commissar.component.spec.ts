import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCommissarComponent } from './add-commissar.component';

describe('AddCommissarComponent', () => {
  let component: AddCommissarComponent;
  let fixture: ComponentFixture<AddCommissarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCommissarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCommissarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
