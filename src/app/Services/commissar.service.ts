import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Responsable} from "../Models/Responsable";
import {Observable} from "rxjs";
import {Commissar} from "../Models/Commissar";

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


  getCommissarById(id: number) : Observable<Commissar>{
    const url = `${this.commissarUrl}/${id}`;
    return this.http.get<Commissar>(url);
  }


  updateCommissar(id:number,commissar:Commissar): Observable<any> {
    const url = `${this.commissarUrl}/${id}`;
    return this.http.put<Responsable>(url, commissar, httpOptions);
  }






}
