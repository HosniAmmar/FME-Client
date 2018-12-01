import {Component, OnInit, ViewChild} from '@angular/core';
import {MatchService} from '../../Services/match.service';

@Component({
  selector: 'app-match-calendar',
  templateUrl: './match-calendar.component.html',
  styleUrls: ['./match-calendar.component.css']
})
export class MatchCalendarComponent implements OnInit {

 constructor(matchService: MatchService) { }
  ngOnInit() {
  }

}
