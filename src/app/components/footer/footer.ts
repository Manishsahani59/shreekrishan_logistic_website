import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../shared/icon/icon';
import { NAV_LINKS } from '../../core/data/nav-links';
import { SERVICES } from '../../core/data/services';

@Component({
  selector: 'app-footer',
  imports: [IconComponent, RouterLink],
  templateUrl: './footer.html',
})
export class FooterComponent {
  protected readonly currentYear = new Date(2026, 0, 1).getFullYear();
  protected readonly navLinks = NAV_LINKS;
  protected readonly services = SERVICES.slice(0, 5);
  protected readonly socials = ['facebook', 'twitter', 'linkedin', 'instagram'];
}
