import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerUpdateComponent } from './player-update.component';
import {FormControl,FormGroup} from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {  inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('PlayerUpdateComponent', () => {
  let component: PlayerUpdateComponent;
  let fixture: ComponentFixture<PlayerUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,RouterTestingModule,HttpClientModule
      ],
      declarations: [ PlayerUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
