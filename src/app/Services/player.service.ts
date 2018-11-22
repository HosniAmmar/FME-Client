import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Player} from '../Models/Player';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playersUrl = '//localhost:8081/player';

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.playersUrl);
  }

  addPlayer (player: Player): Observable<Player> {
    return this.http.post<Player>(this.playersUrl, player, httpOptions);
  }

  getPlayerByTeamId(id: number): Observable<Player[]> {
    const url = `${this.playersUrl}/team/${id}`;
    return this.http.get<Player[]>(url);
  }
  deletePlayer(id: number): void {
    alert('deleting' + id);
    const url = `${this.playersUrl}/${id}`;
    this.http.delete<Player>(url, httpOptions).subscribe();
  }
}
