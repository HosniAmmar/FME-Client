import { Component, OnInit } from '@angular/core';
import {Referee} from '../../Models/Referee';
import {RefereeService} from '../../Services/referee.service';

@Component({
  selector: 'app-add-referee',
  templateUrl: './add-referee.component.html',
  styleUrls: ['./add-referee.component.css']
})
export class AddRefereeComponent implements OnInit {
referee: Referee;
referees: Referee[];
  constructor(private refereeService: RefereeService) {console.log('test'); }
  add(
    id: number,
  firstName: string,
  lastName: string,
  birthdate: string,
  nationality: string,
  adress: string,
  ville: string,
  region: string,
  ncin: string,
  Npassport: string,
  phone: string,
  mailAdress: string,
  photoUrl: string,
  badge: string): void {/*
    this.refereeService.addReferee({
      id,
      firstName,
      lastName,
      birthdate,
      nationality,
      adress,
      ville,
      region,
      ncin,
      Npassport,
      phone,
      mailAdress,
      photoUrl,
      badge} as Referee).subscribe(referee => { this.referees.push(referee); });
       */
       }

  getReferees(): void {
    this.refereeService.getReferees()
      .subscribe(referees => this.referees = referees);
  }

  ngOnInit() {this.getReferees(); }

}
