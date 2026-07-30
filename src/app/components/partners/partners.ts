import { Component } from '@angular/core';
import { CLIENTS } from '../../core/data/clients';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.html',
})
export class PartnersComponent {
  protected readonly partners = CLIENTS;
}
