import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../shared/icon/icon';
import { SERVICES } from '../../core/data/services';
import { PartnersComponent } from '../partners/partners';
import { LocationMapComponent } from '../location-map/location-map';

@Component({
  selector: 'app-services',
  imports: [IconComponent, RouterLink, PartnersComponent, LocationMapComponent],
  templateUrl: './services.html',
})
export class ServicesComponent {
  protected readonly services = SERVICES;
}
