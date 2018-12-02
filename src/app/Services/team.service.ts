import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Team} from '../Models/Team';
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
}
