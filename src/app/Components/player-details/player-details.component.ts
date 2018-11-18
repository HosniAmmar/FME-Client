import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PlayerService} from '../../Services/player.service';
import {Player} from '../../Models/Player';
import {TeamService} from '../../Services/team.service';
import {Team} from '../../Models/Team';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit, OnChanges {
  @Input() id: number;
  player: Player;

  previousTeam: Team;
  constructor(private playerService: PlayerService , private teamService: TeamService) { }

   ngOnInit() {
     }
     getPlayer(): void {
        this.playerService.getPlayer(this.id).subscribe(player => this.player = player);
        this.teamService.getTeam(this.player.previousTeamId).subscribe(team => this.previousTeam = team);
     }

 ngOnChanges(changes: SimpleChanges): void {
    this.getPlayer();

  }

}
