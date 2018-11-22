import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddPlayerComponent} from './Components/add-player/add-player.component';

const routes: Routes = [
  { path: 'player/add', component: AddPlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
