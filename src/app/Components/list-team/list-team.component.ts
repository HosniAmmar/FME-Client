import { Component, OnInit } from '@angular/core';
import {Team} from '../../Models/Team';
import {TeamService} from '../../Services/team.service';
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-list-team',
  templateUrl: './list-team.component.html',
  styleUrls: ['./list-team.component.css']
})
export class ListTeamComponent implements OnInit {
  teams: Team[];
  teams$: Observable<Team[]>;
  private searchTerms = new Subject<string>();
  constructor(private teamService: TeamService) { }
  search(term: string ): void {
    this.searchTerms.next(term);
  }
  ngOnInit() {

    this.teams$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(200),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.teamService.searchTeams(term)),
    );
    }
  getTeams(): void {
    this.teamService.getTeams().subscribe( data => {
      this.teams = data;
    });
  }

  on(): void {

    document.getElementById('overlay').style.display = 'block';
  }

  off(): void {
    document.getElementById('overlay').style.display = 'none';
  }
}
