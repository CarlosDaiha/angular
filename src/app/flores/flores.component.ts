import { Component } from '@angular/core';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-flores',
  templateUrl: './flores.component.html',
  styleUrls: ['./flores.component.css']
})
export class FloresComponent {

  constructor(private appService: AppService) { }

  
  public get flores() : string[] {
    return this.appService.flores;
  }
  

  borrar(): void {
    this.appService.borrarFlores();
  }

}
