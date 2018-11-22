import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteResponsableComponent } from './delete-responsable.component';

describe('DeleteResponsableComponent', () => {
  let component: DeleteResponsableComponent;
  let fixture: ComponentFixture<DeleteResponsableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteResponsableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
