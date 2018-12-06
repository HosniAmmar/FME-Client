import {Component, Input, OnInit} from '@angular/core';
import {Responsable} from '../../Models/Responsable';
import {Team} from '../../Models/Team';
import {TeamService} from '../../Services/team.service';

@Component({
  selector: 'app-update-team',
  templateUrl: './update-team.component.html',
  styleUrls: ['./update-team.component.css']
})
export class UpdateTeamComponent implements OnInit {
  @Input()teamIn:Team;
  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  save(): void {
    this.teamService.updateTeam(this.teamIn.id,this.teamIn).subscribe();
  }

}
