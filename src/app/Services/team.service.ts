import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Player} from '../Models/Player';
import {Team} from '../Models/Team';
import {Responsable} from '../Models/Responsable';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamUrl = '//localhost:8082/team';
  constructor(private http: HttpClient) { }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.teamUrl);
  }
  getTeam(id: number): Observable<Team> {
    return this.http.get<Team>(`${this.teamUrl}/${id}`);
  }


  searchTeams(term: string): Observable<Team[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    const url = `${this.teamUrl}/name/?name=${term}`;
    return this.http.get<Team[]>(url);
  }


  addTeam (team:Team): Observable<Team> {
    return this.http.post<Team>(this.teamUrl, team, httpOptions);
  }



}
