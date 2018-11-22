import { Component, OnInit } from '@angular/core';
import {Responsable} from "../../Models/Responsable";
import {ActivatedRoute} from "@angular/router";
import {ResponsableService} from "../../Services/responsable.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-list-responsable',
  templateUrl: './list-responsable.component.html',
  styleUrls: ['./list-responsable.component.css']
})
export class ListResponsableComponent implements OnInit {

  responsables: Responsable [];
  selectedResponsable:Responsable;
  idx = '0';
  constructor(private route: ActivatedRoute, private responsableService: ResponsableService) { }

  ngOnInit() {
    this.getResponsables();

  }
  getResponsables(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.idx = id.toString();
    this.responsableService.getResponsables().subscribe( data => {
      this.responsables = data;
    });
  }

  //interface delete responsable
  delete(id: number): void {
    this.responsableService.getResponsable(id).subscribe(value => {
      this.selectedResponsable=value;
    });
    document.getElementById('overlayDelete').style.display = 'block';

  }

  offDelete(): void {
    document.getElementById('overlayDelete').style.display = 'none';
  }


  //interface d'ajout responsable

  on(): void {
    document.getElementById('overlay').style.display = 'block';
  }

  off(): void {
    document.getElementById('overlay').style.display = 'none';
  }



//interface detail responsable
  onN(id:number) :void {
    this.responsableService.getResponsable(id).subscribe(value => {
      this.selectedResponsable=value;
    });
    document.getElementById('overlay2').style.display = 'block';


  }

  ofF() :void {
    document.getElementById('overlay2').style.display = 'none';
  }


//interface update responsable
  onNUpdate(id:number) :void {
    this.responsableService.getResponsable(id).subscribe(value => {
      this.selectedResponsable=value;
    });
    document.getElementById('overlay3').style.display = 'block';

  }

  ofFUpdate() :void {
    document.getElementById('overlay3').style.display = 'none';
  }




}


