import { Component, OnInit } from '@angular/core';
import {Responsable} from '../../Models/Responsable';
import { ResponsableService } from '../../Services/responsable.service';

@Component({
  selector: 'app-add-responsable',
  templateUrl: './add-responsable.component.html',
  styleUrls: ['./add-responsable.component.css']
})
export class AddResponsableComponent implements OnInit {
  responsable:Responsable;
  responsables: Responsable[]=[];
  constructor(private responsableService:ResponsableService) { }

  add(
    id:Number,
  adress: string,
  birthdate: string,
  firstName: string,
  formation:string,
  lastName: string,
  mailAdress: string,
    ncin:string,
  nationality: string,
  phone: string,
  photoUrl: string): void {
    this.responsableService.addResponsable({
      id,
      adress,
      birthdate,
      firstName,
      formation,
      lastName,
      mailAdress,
      ncin,
      nationality,
      phone,
      photoUrl } as Responsable)
      .subscribe(responsable => {
        this.responsables.push(responsable);
      });
  }


  ngOnInit() {
  }

}
