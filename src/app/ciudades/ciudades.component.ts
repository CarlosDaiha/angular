import { Component, OnInit } from '@angular/core';
import { last } from 'rxjs';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent implements OnInit {

  ciudades : string[] = new Array();
  borradas : string[] = new Array();
  aux : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  mostrar() {
    this.ciudades = ["Madrid", "Sevilla", "Barcelona", "Bilbao", "Valencia", "Zaragoza"];
  }

  borrar() {
    if (this.ciudades.length != 0) {
      this.aux = String(this.ciudades.pop()?.toString());
      this.borradas.push(this.aux);
    }
  }

}
