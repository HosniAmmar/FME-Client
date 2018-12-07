import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCommissaireComponent } from './list-commissaire.component';

describe('ListCommissaireComponent', () => {
  let component: ListCommissaireComponent;
  let fixture: ComponentFixture<ListCommissaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCommissaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCommissaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
