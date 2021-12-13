import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MesesComponent } from './meses/meses.component';
import { DiasComponent } from './dias/dias.component';
import { FloresComponent } from './flores/flores.component';
import { ComidasComponent } from './comidas/comidas.component';
import { CiudadesComponent } from './ciudades/ciudades.component';
import { AppService } from './service/app.service';

@NgModule({
  declarations: [
    AppComponent,
    MesesComponent,
    DiasComponent,
    FloresComponent,
    ComidasComponent,
    CiudadesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
