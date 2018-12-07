import { Component, OnInit } from '@angular/core';

import {TeamService} from '../../Services/team.service';
import {Responsable} from '../../Models/Responsable';
import {Team} from '../../Models/Team';


@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  team: Team;
  teams: Team[] = [];

  constructor(private teamService: TeamService) { }


  constructor() { }


  ngOnInit() {
  }


  add(
    id: Number,
    name: string,
    logoUrl: string,
    address: string,
    region: string,
    creationDate: string,
    presidentFirstName: string,
    presidentLastName: string,
    presidentPhone: string,
    secretaryFirstName: string,
    secretaryLastName: string,
    secretaryPhone: string,
    mail: string,
    phone: string,
    fax: string,
    mainStadium: string,
    mainStadiumLocation: string,
    teamPhoto: string,
    division: string
   ): void {
    this.teamService.addTeam({
      id,
      name,
      logoUrl,
      address,
      region,
      creationDate,
      presidentFirstName,
      presidentLastName,
      presidentPhone,
      secretaryFirstName,
      secretaryLastName,
      secretaryPhone,
      mail,
      phone,
      fax,
      mainStadium,
      mainStadiumLocation,
      teamPhoto,
      division
    } as Team)
      .subscribe(team => {
        this.teams.push(team);
      });

  }


}
