import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular'; // Importa IonicModule
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Asegúrate de importar el módulo de rutas

@NgModule({
  imports: [
    BrowserModule,
    IonicModule.forRoot(), // Importa IonicModule
    AppRoutingModule, // Importa las rutas
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}