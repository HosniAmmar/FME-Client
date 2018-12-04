import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {  inject } from '@angular/core/testing';
import { DeleteResponsableComponent } from './delete-responsable.component';

describe('DeleteResponsableComponent', () => {
  let component: DeleteResponsableComponent;
  let fixture: ComponentFixture<DeleteResponsableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
        declarations: [DeleteResponsableComponent],
    });
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
