import {Component, Input, OnInit} from '@angular/core';
import {Responsable} from "../../Models/Responsable";
import {ResponsableService} from "../../Services/responsable.service";

@Component({
  selector: 'app-delete-responsable',
  templateUrl: './delete-responsable.component.html',
  styleUrls: ['./delete-responsable.component.css']
})
export class DeleteResponsableComponent implements OnInit {
  @Input()responsablein:Responsable;

  constructor(private responsableService: ResponsableService) { }

  ngOnInit() {
  }


  delete(): void {
    this.responsableService.deleteResponsable(this.responsablein.id);
  }

  close():void{
    document.getElementById('overlayDelete').style.display = 'none';
  }



}
