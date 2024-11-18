import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { ApiService } from '../services/api.service'; // Corregir la ruta de importación

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  private map: L.Map | undefined;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.initMap();
    this.loadData();
  }

  private initMap(): void {
    this.map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }

  private loadData(): void {
    this.apiService.getData().subscribe(data => {
      if (this.map) {
        data.forEach(item => {
          if (this.map) {
            L.marker([item.latitude, item.longitude])
              .bindPopup(`<b>${item.name}</b><br>${item.description}`)
              .addTo(this.map)
              .openPopup();
          }
        });
      }
    });
  }
}

function bindPopup(arg0: string) {
  throw new Error('Function not implemented.');
}
