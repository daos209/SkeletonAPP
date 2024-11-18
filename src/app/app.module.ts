import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MapComponent } from './map/map.component'; // Tu componente de mapa

@NgModule({
  declarations: [
    AppComponent,
    MapComponent // Declara tu MapComponent aquí
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Añade HttpClientModule aquí
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }