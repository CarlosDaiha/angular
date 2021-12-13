import { Component } from '@angular/core';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.component.html',
  styleUrls: ['./comidas.component.css']
})
export class ComidasComponent {
  
  constructor(private appService: AppService) { }

  public get comidas() : string[] {
    return this.appService.comidas;
  }

  borrar(): void {
    this.appService.borrarComidas();
  }

}
