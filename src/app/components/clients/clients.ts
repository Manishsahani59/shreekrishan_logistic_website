import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../shared/icon/icon';
import { CLIENTS } from '../../core/data/clients';

@Component({
  selector: 'app-clients',
  imports: [IconComponent, RouterLink],
  templateUrl: './clients.html',
})
export class ClientsComponent {
  protected readonly clients = CLIENTS;
}
