import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.component.html',
  styleUrls: ['./comidas.component.css']
})
export class ComidasComponent implements OnInit {

  comidas : string[] = ["Rápida", "A domicilio", "Típica", "Vegetariana",
    "Mexicana", "China", "Italiana", "Suiza"];

  constructor() { }

  ngOnInit(): void {
  }

  borrar() {
    this.comidas = [];
  }

}
