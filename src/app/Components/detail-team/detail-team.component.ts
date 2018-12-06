import {Component, Input, OnInit} from '@angular/core';
import {Responsable} from '../../Models/Responsable';
import {Team} from '../../Models/Team';

@Component({
  selector: 'app-detail-team',
  templateUrl: './detail-team.component.html',
  styleUrls: ['./detail-team.component.css']
})
export class DetailTeamComponent implements OnInit {

  @Input()teamIn:Team;
  constructor() { }

  ngOnInit() {
  }

}
