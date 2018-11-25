import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Responsable} from "../Models/Responsable";
import {Observable} from "rxjs";
import {Commissar} from "../Models/Commissar";
import {Player} from "../Models/Player";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CommissarService {
  private  commissarUrl = 'http://localhost:8082/commissioner';

  constructor(private http: HttpClient) { }

  addCommissar (commissar:Commissar): Observable<Commissar> {
    return this.http.post<Commissar>(this.commissarUrl, commissar, httpOptions);
  }

  getCommissar(): Observable<Commissar[]> {
    return this.http.get<Commissar[]>(this.commissarUrl);
  }




}
