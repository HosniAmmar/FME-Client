import { Component, OnInit } from '@angular/core';
import {Player} from '../../Models/Player';
import {PlayerService} from '../../Services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  players: Player[];
  player: Player;
  constructor(private playerService: PlayerService) {
    console.log('test');
  }
  add(
    id: number,
    licenseNumber: string,
    firstName: string,
    lastName: string,
    squadNumber: number,
    natIdNum: string,
    adress: string,
    phone: string,
    mailAdress: string,
    height: number,
    weight: number,
    birthdate: string,
    actualTeamId: number,
    previousTeamId: number,
    nationality: string,
    category: string,
    photoUrl: string): void {
    this.playerService.addPlayer({
      id,
      licenseNumber,
      firstName,
      lastName,
      squadNumber,
      natIdNum,
      adress,
      phone,
      mailAdress,
      height,
      weight,
      birthdate,
      actualTeamId,
      previousTeamId,
      nationality,
      category,
      photoUrl } as Player)
      .subscribe(player => {
        this.players.push(player);
      });
  }

  getPlayers(): void {
    this.playerService.getPlayers()
      .subscribe(players => this.players = players);
  }
  ngOnInit() {
    this.getPlayers();
  }

}
