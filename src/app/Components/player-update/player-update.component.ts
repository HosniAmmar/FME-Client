import {Component, Input, OnInit} from '@angular/core';
import {Player} from '../../Models/Player';
import {PlayerService} from '../../Services/player.service';

@Component({
  selector: 'app-player-update',
  templateUrl: './player-update.component.html',
  styleUrls: ['./player-update.component.css']
})
export class PlayerUpdateComponent implements OnInit {
  @Input() player: Player;
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }
  save(): void {
    this.playerService.updatePlayer(this.player).subscribe();
  }

}
