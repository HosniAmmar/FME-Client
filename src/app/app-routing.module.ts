



import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddPlayerComponent} from './Components/add-player/add-player.component';
import {ListPlayerComponent} from './Components/list-player/list-player.component';
import {AddResponsableComponent} from './Components/add-responsable/add-responsable.component';
import {ListResponsableComponent} from './Components/list-responsable/list-responsable.component';
import {ListTeamComponent} from './Components/list-team/list-team.component';
import {AddRefereeComponent} from './Components/add-referee/add-referee.component';

const routes: Routes = [

  { path: 'referee/add', component: AddRefereeComponent},
  { path: 'player/add', component: AddPlayerComponent},
  { path: 'players', component: ListPlayerComponent},
  { path: 'teams', component: ListTeamComponent},

  {path: 'responsable/add', component: AddResponsableComponent},
  {path: 'responsable/:id' , component: ListResponsableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
