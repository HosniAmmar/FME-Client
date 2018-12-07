import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Team} from '../Models/Team';
import {Responsable} from '../Models/Responsable';
import {Observable, of} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teamUrl = '//localhost:8083/team';

  constructor(private http: HttpClient) { }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.teamUrl);
  }
  getTeam(id: number): Observable<Team> {
    return this.http.get<Team>(`${this.teamUrl}/${id}`);
  }


  searchTeams(term: string): Observable<Team[]> {
    if (!term.trim()) {
      return of([]);
    }
    const url = `${this.teamUrl}/name/?name=${term}`;
    return this.http.get<Team[]>(url);
  }


  addTeam (team:Team): Observable<Team> {
    return this.http.post<Team>(this.teamUrl, team, httpOptions);
  }

  updateTeam(id:number,team: Team): Observable<any> {
    const url = `${this.teamUrl}/${id}`;
    return this.http.put<Team>(url, team, httpOptions);
  }

  deleteTeam(id: number): void {
    const url = `${this.teamUrl}/${id}`;
    this.http.delete<Team>(url, httpOptions).subscribe();
  }


}
