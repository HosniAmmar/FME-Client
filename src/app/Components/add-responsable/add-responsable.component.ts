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
  constructor(private responsableService: ResponsableService) { }

  add(
    id:Number,
    firstName: string,
    lastName: string,
    natIdNum:string,

    adress: string,
   birthdate: string,
    phone: string,
    mailAdress: string,

    fonction:string,
  nationality: string,
  photoUrl: string,
    region:string,
    city:string,
    numpasseport:string,
    comment:string): void {
    this.responsableService.addResponsable({
      id,
      firstName,
      lastName,
      natIdNum,
      adress,
      birthdate,
      phone,
      mailAdress,
      fonction,
      nationality,
      photoUrl,
      region,
      city,
      numpasseport,
      comment} as Responsable)
      .subscribe(responsable => {
        this.responsables.push(responsable);
      });
    this.close();
  }


  ngOnInit() {
  }

  close():void{
    document.getElementById('overlay').style.display = 'none';
  }

}
