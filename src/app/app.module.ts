import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MaterielModule} from "./MaterielModule";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPlayerComponent } from './Components/add-player/add-player.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ListPlayerComponent } from './Components/list-player/list-player.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddResponsableComponent } from './Components/add-responsable/add-responsable.component';
import { ListResponsableComponent } from './Components/list-responsable/list-responsable.component';
import { HeaderComponent } from './header/header.component';
import { DetailResponsableComponent } from './Components/detail-responsable/detail-responsable.component';
import { UpdateResponsableComponent } from './Components/update-responsable/update-responsable.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPlayerComponent,
    ListPlayerComponent,
    AddResponsableComponent,
    ListResponsableComponent,
    HeaderComponent,
    DetailResponsableComponent,
    UpdateResponsableComponent
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
