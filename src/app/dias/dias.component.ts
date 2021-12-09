import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dias',
  templateUrl: './dias.component.html',
  styleUrls: ['./dias.component.css']
})
export class DiasComponent implements OnInit {

  dias : string[] = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
  diaBorrado : string|undefined = "";

  constructor() { }

  ngOnInit(): void {
  }

  borrarDia() {
    this.diaBorrado = this.dias.pop();
  }

}
