import {Component, Input, OnInit} from '@angular/core';

import {Player} from '../../Models/Player';
import {TeamService} from '../../Services/team.service';
import {Team} from '../../Models/Team';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit{
  @Input() player: Player;


  previousTeam: Team;
  constructor( private teamService: TeamService) { }

   ngOnInit() {
     }
     getPlayer(): void {
        this.teamService.getTeam(this.player.previousTeamId).subscribe(team => this.previousTeam = team);
     }



}
