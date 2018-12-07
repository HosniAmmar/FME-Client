import { Component, OnInit } from '@angular/core';
import {TeamService} from '../../Services/team.service';
import {Team} from '../../Models/Team';
import {Alert} from 'selenium-webdriver';
import {RefereeService} from '../../Services/referee.service';
import {Referee} from '../../Models/Referee';
import {MatchService} from '../../Services/match.service';
import {Match} from '../../models/Match';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  teams: Team[];
  equipe1: Team;
  equipe2: Team;
  referees: Referee[];
  imgA: HTMLImageElement;
  imgB: HTMLImageElement;

  constructor(private teamService: TeamService, private refereeService: RefereeService, private matchService: MatchService) { }

  ngOnInit() {
    this.getTeams();
    this.getReferees();
  }
  setTeamA(team: Team) {
    this.equipe1 = team;
    /*
    this.teams.forEach(function (value) {
      if ( value.id === Number(teamid)) {
        this.imgA = <HTMLImageElement> document.getElementById('teamAImg');
        this.imgA.src = value.logoUrl;
      }
    });
    */
  }
  setTeamB(team: Team) {
    this.equipe2 = team;
    /*
        this.teams.forEach(function (value) {
          if ( value.id === Number(teamid)) {
            this.imgB = <HTMLImageElement> document.getElementById('teamBImg');
            this.imgB.src = value.logoUrl;

          }
        });
        */
  }


  getTeams(): void {
      this.teamService.getTeams().subscribe(data => {this.teams = data; } );
  }
  getReferees(): void {
    this.refereeService.getReferees().subscribe(data => {this.referees = data; } );
  }
  add( id: number,
       equipe1: Team,
       equipe2: Team,
       date: string,
       heure: string,
       idArbitre1: number,
       idArbitre2: number,
       idArbitre3: number,
       idCommissaire: number,
       place: string): void {
    equipe1 = this.equipe1;
    equipe2 = this.equipe2;

    this.matchService.addMatch({
  id,
      equipe1,
  equipe2,
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
