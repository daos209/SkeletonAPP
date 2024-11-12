import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSegment, IonSegmentButton } from '@ionic/angular/standalone';
import { MisDatosComponent } from '../mis-datos/mis-datos.component';
import { ExperienciaLaboralComponent } from '../experiencia-laboral/experiencia-laboral.component';
import { CertificacionesComponent } from '../certificaciones/certificaciones.component';

@Component({
  imports: [
    BrowserModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSegment,
    IonSegmentButton,
    MisDatosComponent,
    ExperienciaLaboralComponent,
    CertificacionesComponent
  ],
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
})
export class HomePage {
  selectedTab: string = 'mis-datos';

  constructor() {}
}