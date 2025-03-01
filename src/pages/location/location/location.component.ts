import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements AfterViewInit {
  private map!: L.Map;
  private marker!: L.Marker;
  storeImg: string = 'storeLocation.jpeg';

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initMap();
    }, 0);
  }

  private initMap(): void {
    if (this.map) {
      this.map.remove();
    }

    this.map = L.map('map', {
      center: [9.0310237, 125.5238055],
      zoom: 14,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(this.map);

    this.marker = L.marker([9.0310237, 125.5238055]).addTo(this.map);
  }
}
