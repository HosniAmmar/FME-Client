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
  img: HTMLImageElement;
  constructor(private playerService: PlayerService) {
  }

  add(
    id: number,
    licenseNumber: string,
    firstName: string,
    lastName: string,
    squadNumber: number,
    natIdNum: string,
    address: string,
    phone: string,
    mailAddress: string,
    height: number,
    weight: number,
    birthdate: string,
    actualTeamId: number,
    previousTeamId: number,
    nationality: string,
    category: string,
    photoUrl: string,
    region: string,
    city: string,
    comment: string): void {
    const numpasseport: string = natIdNum;
    this.playerService.addPlayer({
      firstName,
      lastName,
      phone,
      natIdNum,
        address,
      mailAddress,
      height,
      weight,
      birthdate,
      nationality,
      photoUrl,
      region,
      city,
      numpasseport,
      comment,
    id,
      licenseNumber,
    squadNumber,
      actualTeamId,
      previousTeamId,
      category} as Player)
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
  displayImage(url: string): void {
    this.img = <HTMLImageElement> document.getElementById('profileImg');
    this.img.src = url;
  }



}
