import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flores',
  templateUrl: './flores.component.html',
  styleUrls: ['./flores.component.css']
})
export class FloresComponent implements OnInit {

  flores : string[] = ["Orquídea", "Margarita", "Azucena", "Azalea", 
    "Dalia", "Hortensia", "Lirio amarillo", "Hibisco"];

  constructor() { }

  ngOnInit(): void {
  }

  borrar() {
    this.flores = [];
  }

}
