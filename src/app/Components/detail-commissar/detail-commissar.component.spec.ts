import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCommissarComponent } from './detail-commissar.component';

describe('DetailCommissarComponent', () => {
  let component: DetailCommissarComponent;
  let fixture: ComponentFixture<DetailCommissarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCommissarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCommissarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
