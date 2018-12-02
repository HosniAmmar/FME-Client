import { Component, OnInit } from '@angular/core';
import {TeamService} from '../../Services/team.service';
import {Team} from '../../Models/Team';
import {Alert} from 'selenium-webdriver';
import {RefereeService} from '../../Services/referee.service';
import {Referee} from '../../Models/Referee';
import {MatchService} from '../../Services/match.service';
import {Match} from '../../Models/Match';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  teams: Team[];
  referees: Referee[];
  imgA: HTMLImageElement;
  imgB: HTMLImageElement;

  constructor(private teamService: TeamService, private refereeService: RefereeService, private matchService: MatchService) { }

  ngOnInit() {
    this.getTeams();
    this.getReferees();
  }
  setTeamA(teamid: String) {
    this.teams.forEach(function (value) {
      if ( value.id === Number(teamid)) {
        this.imgA = <HTMLImageElement> document.getElementById('teamAImg');
        this.imgA.src = value.logoUrl;
      }
    });
  }
  setTeamB(teamid: String) {

    this.teams.forEach(function (value) {
      if ( value.id === Number(teamid)) {
        this.imgB = <HTMLImageElement> document.getElementById('teamBImg');
        this.imgB.src = value.logoUrl;

      }
    });
  }


  getTeams(): void {
      this.teamService.getTeams().subscribe(data => {this.teams = data; } );
  }
  getReferees(): void {
    this.refereeService.getReferees().subscribe(data => {this.referees = data; } );
  }
  add( id: number,
       idEquipe1: number,
       idEquipe2: number,
       date: string,
       heure: string,
       idArbitre1: number,
       idArbitre2: number,
       idArbitre3: number,
       idCommissaire: number,
       place: string): void {
   this.matchService.addMatch({
  id,
      idEquipe1,
  idEquipe2,
    date,
    heure,
    place,
  idArbitre1,
  idArbitre2,
  idArbitre3,
    idCommissaire} as Match )
  .subscribe();

  }

}
