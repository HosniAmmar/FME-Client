import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterielModule} from './MaterielModule';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPlayerComponent } from './Components/add-player/add-player.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ListPlayerComponent } from './Components/list-player/list-player.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddResponsableComponent } from './Components/add-responsable/add-responsable.component';
import {AddRefereeComponent} from './Components/add-referee/add-referee.component';
import { ListResponsableComponent } from './Components/list-responsable/list-responsable.component';
import { HeaderComponent } from './header/header.component';
import { UpdateResponsableComponent } from './Components/update-responsable/update-responsable.component';
import { DeleteResponsableComponent } from './Components/delete-responsable/delete-responsable.component';
import { ListTeamComponent } from './Components/list-team/list-team.component';
import { PlayerDetailsComponent } from './Components/player-details/player-details.component';
import { DetailResponsableComponent } from './Components/detail-responsable/detail-responsable.component';
import { PlayerUpdateComponent } from './Components/player-update/player-update.component';
import { AddTeamComponent } from './Components/add-team/add-team.component';
import { DetailTeamComponent } from './Components/detail-team/detail-team.component';
import { UpdateTeamComponent } from './Components/update-team/update-team.component';
import { DeleteTeamComponent } from './Components/delete-team/delete-team.component';
import { MemberTeamComponent } from './Components/member-team/member-team.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPlayerComponent,
    ListPlayerComponent,
    AddResponsableComponent,
    AddRefereeComponent,
    ListResponsableComponent,
    HeaderComponent,
    DetailResponsableComponent,
    UpdateResponsableComponent,
    DeleteResponsableComponent,
    ListTeamComponent,
    PlayerDetailsComponent,
    PlayerUpdateComponent,
    AddTeamComponent,
    DetailTeamComponent,
    UpdateTeamComponent,
    DeleteTeamComponent,
    MemberTeamComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterielModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
