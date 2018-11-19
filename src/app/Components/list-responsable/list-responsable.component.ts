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
  delete(id: number): void {
    alert('clicked delete ' + id);
    this.responsableService.deleteResponsable(id);
  }
  on(): void {
    document.getElementById('overlay').style.display = 'block';
  }

  off(): void {
    document.getElementById('overlay').style.display = 'none';
  }


  onN(id:number) :void {
    this.responsableService.getResponsable(id).subscribe(value => {
      this.selectedResponsable=value;
    });

    document.getElementById('overlay2').style.display = 'block';

  }

  ofF() :void {
    document.getElementById('overlay2').style.display = 'none';
  }



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


