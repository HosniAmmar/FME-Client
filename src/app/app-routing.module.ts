import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddPlayerComponent} from './Components/add-player/add-player.component';
import {ListPlayerComponent} from './Components/list-player/list-player.component';
import {AddResponsableComponent} from './Components/add-responsable/add-responsable.component';
import {ListResponsableComponent} from './Components/list-responsable/list-responsable.component';
import {ListTeamComponent} from './Components/list-team/list-team.component';
import {ListCommissaireComponent} from './Components/list-commissaire/list-commissaire.component';

const routes: Routes = [

  { path: 'player/add', component: AddPlayerComponent},
  { path: 'players', component: ListPlayerComponent},
  {path: 'responsable/add', component: AddResponsableComponent},
  {path: 'responsables' , component: ListResponsableComponent},
  {path: 'team' , component: ListTeamComponent},
  {path: 'commissars' , component: ListCommissaireComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
