import { Component, OnInit,Input } from '@angular/core';
import {Responsable} from "../../Models/Responsable";
import {Observable} from "rxjs";

@Component({
  selector: 'app-detail-responsable',
  templateUrl: './detail-responsable.component.html',
  styleUrls: ['./detail-responsable.component.css']
})
export class DetailResponsableComponent implements OnInit {

  @Input()responsablein:Responsable;

  constructor() { }

  ngOnInit() {
  }

}
