import {Component, Input, OnInit} from '@angular/core';
import {Match} from '../../Models/Match';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {
  @Input()  matchList: Match[];
  selectedMatch: Match;
  constructor() { }

  ngOnInit() {
  }
  onDetails(match: Match): void {
    this.selectedMatch = match;
    document.getElementById('overlayDetails').style.display = 'block';
  }

  offDetails(): void {
    document.getElementById('overlayDetails').style.display = 'none';
  }

  onDelete(match: Match): void {
    this.selectedMatch = match;
    document.getElementById('overlayDelete').style.display = 'block';
  }

  offDelete(): void {
    document.getElementById('overlayDelete').style.display = 'none';
  }
}
