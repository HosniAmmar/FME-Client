import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Referee} from '../Models/Referee';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})



export class RefereeService {
  refereesUrl = '//localhost:8081/referee';

  constructor(private http: HttpClient) { }

  getReferees(): Observable<Referee[]> {
    return this.http.get<Referee[]>(this.refereesUrl);
  }

  addReferee (referee: Referee): Observable<Referee> {
    return this.http.post<Referee>(this.refereesUrl, referee, httpOptions);
  }
}
