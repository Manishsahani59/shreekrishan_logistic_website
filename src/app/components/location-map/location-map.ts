import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { GOOGLE_MAPS_EMBED_URL } from '../../core/data/map';

@Component({
  selector: 'app-location-map',
  templateUrl: './location-map.html',
})
export class LocationMapComponent {
  protected readonly mapUrl: SafeResourceUrl;

  constructor(sanitizer: DomSanitizer) {
    this.mapUrl = sanitizer.bypassSecurityTrustResourceUrl(GOOGLE_MAPS_EMBED_URL);
  }
}
