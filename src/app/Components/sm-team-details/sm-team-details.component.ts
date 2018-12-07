import {Component, Input, OnInit} from '@angular/core';
import {Team} from '../../Models/Team';
import {TeamService} from '../../Services/team.service';

@Component({
  selector: 'app-sm-team-details',
  templateUrl: './sm-team-details.component.html',
  styleUrls: ['./sm-team-details.component.css']
})
export class SmTeamDetailsComponent implements OnInit {
  @Input() teamId: number;
  team: Team;
  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.getTeamById();
  }
  getTeamById() {
    this.teamService.getTeam(this.teamId).subscribe(data => {
      this.team = data;
    });
  }

}
