import { Component } from '@angular/core';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-dias',
  templateUrl: './dias.component.html',
  styleUrls: ['./dias.component.css']
})
export class DiasComponent {

  diaBorrado : string|undefined = "";

  constructor(private appService: AppService) { }
  
  public get dias() : string[] {
    return this.appService.dias;
  }

  borrar(): void {
    this.diaBorrado = this.appService.borrarDia();
  }

}
