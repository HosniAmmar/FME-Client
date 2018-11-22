import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PlayerService} from '../../Services/player.service';
import {Player} from '../../Models/Player';
import {Observable, Subject} from 'rxjs';
import {Team} from '../../Models/Team';
import {TeamService} from '../../Services/team.service';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-list-player',
  templateUrl: './list-player.component.html',
  styleUrls: ['./list-player.component.css']
})
export class ListPlayerComponent implements OnInit {
  teams: Observable<Team[]>;
  private searchTerms = new Subject<string>();
  private playerListTerms = new Subject<number>();
  players: Observable<Player[]>;
  teamId: number;
  selectedPlayer: Player;
  constructor(private route: ActivatedRoute, private playerService: PlayerService, private teamService: TeamService) { }
  search(term: string ): void {
    this.searchTerms.next(term);
  }
  ngOnInit() {
    this.players = this.playerListTerms.pipe(
      debounceTime(200),

      switchMap((term: number) => this.playerService.getPlayerByTeamId(term)),
    );
    this.teams = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(200),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.teamService.searchTeams(term)),
    );
  }



  getPlayers(teamId: number): void {
    this.playerListTerms.next(teamId);
  //  this.playerService.getPlayerByTeamId(teamId).subscribe( data => {
  //    this.players = data;
  //  });
  }
  delete(id: number): void {
     // alert('clicked delete ' + id);
    //
    if (confirm('voulez vous vraiment supprimer ce joueur?')) {
    this.playerService.deletePlayer(id);
    this.getPlayers(this.teamId);
    }

  }
  setTeam(id: number) {
    this.getPlayers(id);
    this.teamId = id;
  }

  on(): void {

    document.getElementById('overlay').style.display = 'block';
  }

  off(): void {
    document.getElementById('overlay').style.display = 'none';
  }
  offDetails(): void {
    document.getElementById('overlayDetails').style.display = 'none';
  }
  showPlayer(player: Player): void {
    this.selectedPlayer = player;
    document.getElementById('overlayDetails').style.display = 'block';
  }
}
