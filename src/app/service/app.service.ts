import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  /** SERVICIO PARA MESES */
  private _meses : string[] = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  
  
  public get meses() : string[] {
    return [...this._meses];
  }
  
  public borrarMes(): string|undefined {
    return this._meses.pop();
  }

  /** SERVICIO PARA DÍAS */
  private _dias : string[] = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

  public get dias() : string[] {
    return [...this._dias];
  }
  
  public borrarDia(): string|undefined {
    return this._dias.pop();
  }


  /** SERVICIO PARA COMIDAS */
  private _comidas : string[] = ["Rápida", "A domicilio", "Típica", "Vegetariana",
  "Mexicana", "China", "Italiana", "Suiza"];
  
  public get comidas() : string[] {
    return [...this._comidas];
  }
  
  public borrarComidas(): void {
    this._comidas = [];
  }

  /** SERVICIO PARA FLORES */
  private _flores : string[] = ["Orquídea", "Margarita", "Azucena", "Azalea", 
  "Dalia", "Hortensia", "Lirio amarillo", "Hibisco"];
  
  public get flores() : string[] {
    return [...this._flores];
  }
  
  public borrarFlores(): void {
    this._flores = [];
  }

  /** SERVICIO PARA CIUDADES */
  private _ciudades : string[] = new Array();
  private _borradas : string[] = new Array();
  
  public get ciudades() : string[] {
    return this._ciudades;
  }
  
  public get ciudadesBorradas() : string[] {
    return this._borradas;
  }

  public mostrarCiudades(): void {
    this._ciudades = ["Madrid", "Sevilla", "Barcelona", "Bilbao", "Valencia", "Zaragoza"];
  }

  public borrarCiudad(): void {
    let aux : string = "";
    if (this._ciudades.length != 0) {
      aux = String(this._ciudades.pop()?.toString());
      this._borradas.push(aux);
    }
  }
  
  constructor() { 
    console.log("Servicio iniciado.");
  }
}
