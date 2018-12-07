import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddPlayerComponent} from './Components/add-player/add-player.component';
import {ListPlayerComponent} from './Components/list-player/list-player.component';
import {AddResponsableComponent} from './Components/add-responsable/add-responsable.component';
import {ListResponsableComponent} from './Components/list-responsable/list-responsable.component';
import {ListTeamComponent} from './Components/list-team/list-team.component';
import {PlayerDetailsComponent} from './Components/player-details/player-details.component';
import {AddRefereeComponent} from './Components/add-referee/add-referee.component';
import {AddTeamComponent} from './Components/add-team/add-team.component';
import {AddMatchComponent} from './Components/add-match/add-match.component';
import {MatchCalendarComponent} from './Components/match-calendar/match-calendar.component';
import {ListCommissaireComponent} from './Components/list-commissaire/list-commissaire.component';

const routes: Routes = [

  { path: 'referee/add', component: AddRefereeComponent},
  { path: 'team/add', component: AddTeamComponent},

  { path: 'players', component: ListPlayerComponent},
  { path: 'team', component: ListTeamComponent},
  {path: 'commissars' , component: ListCommissaireComponent},

  {path: 'responsable/add', component: AddResponsableComponent},
  {path: 'responsable/:id' , component: ListResponsableComponent},
  {path: 'details/:id' , component: PlayerDetailsComponent},
  {path: 'match/add', component: AddMatchComponent},
  {path: '', component: MatchCalendarComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
