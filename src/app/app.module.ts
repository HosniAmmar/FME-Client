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
import { DetailResponsableComponent } from './Components/detail-responsable/detail-responsable.component';
import { UpdateResponsableComponent } from './Components/update-responsable/update-responsable.component';
import { DeleteResponsableComponent } from './Components/delete-responsable/delete-responsable.component';
import { ListTeamComponent } from './Components/list-team/list-team.component';
import { PlayerDetailsComponent } from './Components/player-details/player-details.component';
import { PlayerUpdateComponent } from './Components/player-update/player-update.component';
import { AddTeamComponent } from './Components/add-team/add-team.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { AddMatchComponent } from './Components/add-match/add-match.component';
import { MatchCalendarComponent } from './Components/match-calendar/match-calendar.component';
import { SmTeamDetailsComponent } from './Components/sm-team-details/sm-team-details.component';
import { MatchListComponent } from './Components/match-list/match-list.component';
import { MatchDetailsComponent } from './Components/match-details/match-details.component';
import { DeleteMatchComponent } from './Components/delete-match/delete-match.component';
import { AddCommissarComponent} from './Components/add-commissar/add-commissar.component';
import { ListCommissaireComponent } from './Components/list-commissaire/list-commissaire.component';
import { DetailCommissarComponent } from './Components/detail-commissar/detail-commissar.component';


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
    ListTeamComponent,
    PlayerDetailsComponent,
    PlayerUpdateComponent,
    AddTeamComponent,
    AddMatchComponent,
    MatchCalendarComponent,
    SmTeamDetailsComponent,
    MatchListComponent,
    MatchDetailsComponent,
    DeleteMatchComponent,
    DeleteResponsableComponent,
    AddCommissarComponent,
    ListCommissaireComponent,
    DetailCommissarComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterielModule,
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
