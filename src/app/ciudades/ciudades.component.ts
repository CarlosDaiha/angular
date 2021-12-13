import { Component } from '@angular/core';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent {

  constructor(private appService: AppService) { }

  public get ciudades() : string[] {
    return this.appService.ciudades;
  }
  
  public get borradas() : string[] {
    return this.appService.ciudadesBorradas;
  }

  mostrar(): void {
    return this.appService.mostrarCiudades();
  }

  borrar(): void {
    this.appService.borrarCiudad();
  }

}
