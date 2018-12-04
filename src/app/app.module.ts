import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MaterielModule} from './MaterielModule';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPlayerComponent } from './Components/add-player/add-player.component';
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
import {FormControl,FormGroup} from '@angular/forms';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';


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
    PlayerUpdateComponent

  ],
imports: [
BrowserModule,
FormsModule,
HttpClientModule,
AppRoutingModule,
MaterielModule,
BrowserAnimationsModule,
ReactiveFormsModule,
FormsModule,
RouterModule.forRoot([]),

  ],
   schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
