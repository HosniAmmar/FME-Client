import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Match} from '../Models/Match';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class MatchService {
  matchsUrl = '//localhost:8083/match';
  constructor(private http: HttpClient) { }
  addMatch (match: Match): Observable<Match> {
    return this.http.post<Match>(this.matchsUrl, match, httpOptions);
  }
  getMatchs(): Observable<Match[]> {
    return this.http.get<Match[]>(this.matchsUrl);
  }
  getMatchByDate(date: string): Observable<Match[]> {
    const url = `${this.matchsUrl}/date?date=${date}`;
    return this.http.get<Match[]>(url);
  }
}
