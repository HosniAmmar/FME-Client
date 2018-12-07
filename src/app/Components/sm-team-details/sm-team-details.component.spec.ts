import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmTeamDetailsComponent } from './sm-team-details.component';

describe('SmTeamDetailsComponent', () => {
  let component: SmTeamDetailsComponent;
  let fixture: ComponentFixture<SmTeamDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmTeamDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmTeamDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
