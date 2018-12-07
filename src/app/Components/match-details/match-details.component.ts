import {Component, Input, OnInit} from '@angular/core';
import {Match} from '../../Models/Match';
import {Referee} from '../../Models/Referee';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent implements OnInit {
  @Input() match: Match;
  arbitre1: Referee;
  arbitre2: Referee;
  arbitre3: Referee;

  constructor() {
  }

  ngOnInit() {
  }

}


