import {Component, OnInit, ViewChild} from '@angular/core';
import { IgxCalendarComponent, IgxDialogComponent } from 'igniteui-angular';
import {MatchService} from '../../Services/match.service';

@Component({
  selector: 'app-match-calendar',
  templateUrl: './match-calendar.component.html',
  styleUrls: ['./match-calendar.component.css']
})
export class MatchCalendarComponent implements OnInit {
  @ViewChild('calendar') public calendar: IgxCalendarComponent;
  @ViewChild('alert') public dialog: IgxDialogComponent;

  constructor(matchService: MatchService) { }

  ngOnInit() {
  }

}
