import {Component, Input, OnInit} from '@angular/core';
import {Team} from '../../Models/Team';
import {TeamService} from '../../Services/team.service';

@Component({
  selector: 'app-delete-team',
  templateUrl: './delete-team.component.html',
  styleUrls: ['./delete-team.component.css']
})
export class DeleteTeamComponent implements OnInit {
@Input()teamIn:Team
  constructor(private teamService:TeamService) { }

  ngOnInit() {
  }

  delete(): void {
    this.teamService.deleteTeam(this.teamIn.id);
  }

  close(): void{
    document.getElementById('overlayDelete').style.display = 'none';
  }

}
