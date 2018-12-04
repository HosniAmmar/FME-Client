import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { PlayerDetailsComponent } from './player-details.component';

describe('PlayerDetailsComponent', () => {
  let component: PlayerDetailsComponent;
  let fixture: ComponentFixture<PlayerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
        declarations: [PlayerDetailsComponent],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
