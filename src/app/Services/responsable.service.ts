import { Injectable } from '@angular/core';
import {Responsable} from "../Models/Responsable";
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// @ts-ignore
import { catchError, map, tap } from 'rxjs/operators';

import {any} from 'codelyzer/util/function';
import {Player} from "../Models/Player";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ResponsableService {
  private  responsableUrl = 'http://localhost:8081/responsable';

  constructor(private http: HttpClient) { }

  getResponsables(): Observable<Responsable[]> {
    return this.http.get<Responsable[]>(this.responsableUrl);
  }


  addResponsable (responsable:Responsable): Observable<Responsable> {
    return this.http.post<Responsable>(this.responsableUrl, responsable, httpOptions);
  }


  getResponsableById(id: number): Observable<Responsable[]> {
    const url = `${this.responsableUrl}/${id}`;
    return this.http.get<Responsable[]>(url);
  }
  deleteResponsable(id: number): void {
    alert('deleting' + id);
    const url = `${this.responsableUrl}/${id}`;
    this.http.delete<Responsable>(url, httpOptions).subscribe();
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }




}
