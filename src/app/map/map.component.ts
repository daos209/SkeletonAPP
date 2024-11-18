import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { ApiService } from '../services/api.service'; // Corregir la ruta de importación

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  private map!: L.Map;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.initMap();
    this.loadData();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [51.505, -0.09],
      zoom: 13,
      preferCanvas: false,
      attributionControl: true,
      zoomControl: true,
      closePopupOnClick: true,
      boxZoom: true,
      doubleClickZoom: true,
      dragging: true,
      zoomSnap: 1,
      zoomDelta: 1,
      trackResize: true,
      inertia: true,
      inertiaDeceleration: 3000,
      inertiaMaxSpeed: Infinity,
      easeLinearity: 0.2,
      worldCopyJump: false,
      maxBoundsViscosity: 0.0,
      keyboard: true,
      keyboardPanDelta: 80,
      scrollWheelZoom: true,
      wheelDebounceTime: 40,
      wheelPxPerZoomLevel: 60,
      tapHold: true,
      tapTolerance: 15,
      touchZoom: true,
      bounceAtZoomLimits: true,
      zoomAnimation: true,
      zoomAnimationThreshold: 4,
      fadeAnimation: true,
      markerZoomAnimation: true,
      transform3DLimit: Math.pow(2, 23)
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(this.map);

    this.map.locate({ setView: true, maxZoom: 16 });

    this.map.on('locationfound', this.onLocationFound.bind(this));
    this.map.on('locationerror', this.onLocationError.bind(this));
  }

  private onLocationFound(e: L.LocationEvent): void {
    const radius = e.accuracy;

    L.marker(e.latlng).addTo(this.map)
      .bindPopup(`You are within ${radius} meters from this point`).openPopup();

    L.circle(e.latlng, { radius }).addTo(this.map);
  }

  private onLocationError(e: L.ErrorEvent): void {
    alert(e.message);
  }

  private loadData(): void {
    this.apiService.getData().subscribe(data => {
      data.forEach(item => {
        L.marker([item.latitude, item.longitude]).addTo(this.map)
          .bindPopup(`<b>${item.name}</b><br>${item.description}`)
          .openPopup();
      });
    });
  }
}