import { Component, OnInit } from '@angular/core';
import {Team} from '../../Models/Team';
import {TeamService} from '../../Services/team.service';
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list-team',
  templateUrl: './list-team.component.html',
  styleUrls: ['./list-team.component.css']
})
export class ListTeamComponent implements OnInit {
  teams: Team[];
  selectedTeam: Team;
  idx = '0';
//  teams: Observable<Team[]>;
  private searchTerms = new Subject<string>();
  constructor(private route: ActivatedRoute,private teamService: TeamService) { }
  search(term: string ): void {
    this.searchTerms.next(term);
  }
  ngOnInit() {

    this.getTeams();
/*    this.teams$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(200),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.teamService.searchTeams(term)),
    ); */
    }

  getTeams(): void {
    this.teamService.getTeams().subscribe( data => {
      this.teams = data;
    });
  }

//interface ajout equipe
  on(): void {

    document.getElementById('overlay').style.display = 'block';
  }

  off(): void {
    document.getElementById('overlay').style.display = 'none';
  }


  //interface detail equipe
  onN(id:number) :void {
    this.teamService.getTeam(id).subscribe(value => {
      this.selectedTeam=value;
    });
    document.getElementById('overlay2').style.display = 'block';
  }

  ofF() :void {
    document.getElementById('overlay2').style.display = 'none';
  }

  //interface update equipe
  onNUpdate(id:number) :void {
    this.teamService.getTeam(id).subscribe(value => {
      this.selectedTeam=value;
    });
    document.getElementById('overlay3').style.display = 'block';

  }

  ofFUpdate() :void {
    document.getElementById('overlay3').style.display = 'none';
  }

  //interface delete team
  delete(id: number): void {
    this.teamService.getTeam(id).subscribe(value => {
      this.selectedTeam =value;
    });
    document.getElementById('overlayDelete').style.display = 'block';

  }

  offDelete(): void {
    document.getElementById('overlayDelete').style.display = 'none';
  }





}
