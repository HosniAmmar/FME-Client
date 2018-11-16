



import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddPlayerComponent} from './Components/add-player/add-player.component';
import {ListPlayerComponent} from './Components/list-player/list-player.component';
import {AddRefereeComponent} from './Components/add-referee/add-referee.component';

const routes: Routes = [
  { path: 'referee/add', component: AddRefereeComponent},
  { path: 'player/add', component: AddPlayerComponent},
  { path: 'players/:id', component: ListPlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
