import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, map } from 'rxjs';
import { IconComponent } from '../../shared/icon/icon';

const ROUTE_LABELS: Record<string, string> = {
  '': 'Home',
  about: 'About',
  services: 'Services',
  clients: 'Our Clients',
  process: 'Process',
  gallery: 'Gallery',
  contact: 'Contact',
};

function currentPath(router: Router): string {
  return router.url.split(/[?#]/)[0].replace(/^\//, '');
}

@Component({
  selector: 'app-breadcrumb',
  imports: [IconComponent, RouterLink],
  templateUrl: './breadcrumb.html',
})
export class BreadcrumbComponent {
  private readonly router = inject(Router);

  private readonly path = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map(() => currentPath(this.router)),
    ),
    { initialValue: currentPath(this.router) },
  );

  protected readonly isHome = computed(() => this.path() === '');
  protected readonly activeLabel = computed(() => ROUTE_LABELS[this.path()] ?? 'Home');
}
