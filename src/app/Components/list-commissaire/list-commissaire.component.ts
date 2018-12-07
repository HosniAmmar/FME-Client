import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ResponsableService} from "../../Services/responsable.service";
import {CommissarService} from "../../Services/commissar.service";
import {Commissar} from "../../Models/Commissar";
import {Responsable} from "../../Models/Responsable";

@Component({
  selector: 'app-list-commissaire',
  templateUrl: './list-commissaire.component.html',
  styleUrls: ['./list-commissaire.component.css']
})
export class ListCommissaireComponent implements OnInit {
commissars:Commissar[];
  selectedCommissar:Commissar;

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




//interface detail commissaire
  onDetail(id:number) :void {
    this.commisarService.getCommissarById(id).subscribe(value => {
      this.selectedCommissar=value;
    });
    document.getElementById('overlay2').style.display = 'block';

  }

  ofF() :void {
    document.getElementById('overlay2').style.display = 'none';
  }


}
