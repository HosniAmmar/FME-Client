import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddPlayerComponent } from './add-player.component';
import {  inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {Player} from '../../Models/Player'

describe('AddPlayerComponent', () => {
  let component: AddPlayerComponent;
  let fixture: ComponentFixture<AddPlayerComponent>;
//
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
        declarations: [AddPlayerComponent],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //it('should Add player', () => {
  //  const playerTest= new Player(1,"licenseNumber","firstName","lastName",10,"natIdNum","addressA","phone","mailAddress",70,180,"birthdate",2,7,"nationality","category","photoUrl","region","ville");
    //expect(component.add(1,"licenseNumber","firstName","lastName",10,"natIdNum","addressA","phone","mailAddress",70,180,"birthdate",2,7,"nationality","category","photoUrl","region","ville")).toEqual(playerTest);
    //const playertest2 = new Player (null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null);
    //expect(component.add(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)).toEqual(playertest2);

 // });
});
