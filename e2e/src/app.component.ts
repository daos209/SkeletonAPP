import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'skeleton-app';
  cameraActive = false;
  gpsActive = false;
  latitude: number = 0;
  longitude: number = 0;

  constructor() {}

  accessCamera() {
    this.cameraActive = true;
    // Lógica para acceder a la cámara
  }

  accessGPS() {
    this.gpsActive = true;
    // Lógica para acceder al GPS
    this.latitude = 40.7128; // Ejemplo de latitud
    this.longitude = -74.0060; // Ejemplo de longitud
  }
}