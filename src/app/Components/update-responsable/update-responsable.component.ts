import {Component, Input, OnInit} from '@angular/core';
import {Responsable} from "../../Models/Responsable";
import {ResponsableService} from "../../Services/responsable.service";

@Component({
  selector: 'app-update-responsable',
  templateUrl: './update-responsable.component.html',
  styleUrls: ['./update-responsable.component.css']

})
export class UpdateResponsableComponent implements OnInit {
  @Input()responsablein:Responsable;
  constructor(private responsableService: ResponsableService) { }

  ngOnInit() {
  }


  save(): void {
    this.responsableService.updateResponsable(this.responsablein.id,this.responsablein).subscribe();
  }


}
