import { NgModule } from '@angular/core';
import {MatButtonModule} from "@angular/material";
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  imports:[MatButtonModule,MatDividerModule,MatInputModule],
  exports:[MatButtonModule,MatDividerModule,MatInputModule],
})

export class MaterielModule {

}
