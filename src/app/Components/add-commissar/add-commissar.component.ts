import { Component, OnInit } from '@angular/core';
import {Commissar} from "../../Models/Commissar";
import {Player} from "../../Models/Player";
import {CommissarService} from "../../Services/commissar.service";

@Component({
  selector: 'app-add-commissar',
  templateUrl: './add-commissar.component.html',
  styleUrls: ['./add-commissar.component.css']
})
export class AddCommissarComponent implements OnInit {

  commisars: Commissar[]=[];
  commissar:Commissar;
  constructor(private commissarService:CommissarService) { }

  ngOnInit() {
  }


  add(
    id:number,
    badge: number,
    firstName: string,
    lastName: string,
    natIdNum: string,
    adress: string,
    birthdate: string,
    phone: string,
    mailAdress: string,

    height: number,
    weight: number,
    nationality: string,
    photoUrl:string,
    region:string,
    city:string,
    numpasseport:string,
    comment:string

    ): void {
    this.commissarService.addCommissar({
      id,
      badge,
      firstName,
      lastName,
      natIdNum,
      adress,
      birthdate,
      phone,
      mailAdress,
      height,
      weight,
      nationality,
      photoUrl,
      region,
      city,
      numpasseport,
      comment
       } as Commissar)
      .subscribe(commissar => {
        this.commisars.push(commissar);
      });
  }


}
