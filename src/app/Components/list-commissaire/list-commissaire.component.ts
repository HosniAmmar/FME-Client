import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ResponsableService} from "../../Services/responsable.service";
import {CommissarService} from "../../Services/commissar.service";
import {Commissar} from "../../Models/Commissar";

@Component({
  selector: 'app-list-commissaire',
  templateUrl: './list-commissaire.component.html',
  styleUrls: ['./list-commissaire.component.css']
})
export class ListCommissaireComponent implements OnInit {
commissars:Commissar[];
  idx = '0';
  constructor(private route: ActivatedRoute, private commisarService:CommissarService) { }

  ngOnInit() {
    this.getCommissar();
  }

  getCommissar():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.idx = id.toString();
    this.commisarService.getCommissar().subscribe( data => {
      this.commissars = data;
    });
  }

}
