import { Component } from '@angular/core';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-meses',
  templateUrl: './meses.component.html',
  styleUrls: ['./meses.component.css']
})
export class MesesComponent {

  mesBorrado : string|undefined = "";

  constructor(private appService: AppService) { }

  get meses() {
    return this.appService.meses;
  }

  borrar(): void {
    this.mesBorrado = this.appService.borrarMes();
  }

}
