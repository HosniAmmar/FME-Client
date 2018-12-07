import {Component, Input, OnInit} from '@angular/core';
import {Commissar} from "../../Models/Commissar";
import {ResponsableService} from "../../Services/responsable.service";
import {CommissarService} from "../../Services/commissar.service";

@Component({
  selector: 'app-detail-commissar',
  templateUrl: './detail-commissar.component.html',
  styleUrls: ['./detail-commissar.component.css']
})
export class DetailCommissarComponent implements OnInit {
  @Input() commissarIn:Commissar;

  constructor(private commissarService: CommissarService) { }

  ngOnInit() {
  }

  save(): void {
    this.commissarService.updateCommissar(this.commissarIn.id,this.commissarIn).subscribe();

    this.close();
  }

  close():void{
    document.getElementById('overlay3').style.display = 'none';
  }

}
