import {Component, Input, OnInit} from '@angular/core';
import {Match} from '../../Models/Match';
import {MatchService} from '../../Services/match.service';

@Component({
  selector: 'app-delete-match',
  templateUrl: './delete-match.component.html',
  styleUrls: ['./delete-match.component.css']
})
export class DeleteMatchComponent implements OnInit {
  @Input() match: Match;
  constructor(private matchService: MatchService) { }

  ngOnInit() {
  }
  delete() {
    this.matchService.deleteMatch(this.match.id);
  }
  close() {
    document.getElementById('overlayDelete').style.display = 'none';
  }
}
