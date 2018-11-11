import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PlayerService} from '../../Services/player.service';
import {Player} from '../../Models/Player';
@Component({
  selector: 'app-list-player',
  templateUrl: './list-player.component.html',
  styleUrls: ['./list-player.component.css']
})
export class ListPlayerComponent implements OnInit {

  players: Player [];
  idx = '0';
  constructor(private route: ActivatedRoute, private playerService: PlayerService) { }

  ngOnInit() {
    this.getPlayers();

    }
  getPlayers(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.idx = id.toString();
    this.playerService.getPlayerByTeamId(id).subscribe( data => {
      this.players = data;
    });
  }
  delete(id: number): void {
    alert('clicked delete ' + id);
    this.playerService.deletePlayer(id);
  }
  on(): void {

    document.getElementById('overlay').style.display = 'block';
  }

  off(): void {
    document.getElementById('overlay').style.display = 'none';
  }
}
