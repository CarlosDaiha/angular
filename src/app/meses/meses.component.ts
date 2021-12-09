import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meses',
  templateUrl: './meses.component.html',
  styleUrls: ['./meses.component.css']
})
export class MesesComponent implements OnInit {

  meses : string[] = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  mesBorrado : string|undefined = "";

  constructor() { }

  ngOnInit(): void {
  }

  borrarMes() {
    this.mesBorrado = this.meses.pop();
  }

}
