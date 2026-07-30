import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter, map } from 'rxjs';
import { IconComponent } from '../../shared/icon/icon';
import { LOGIN_URL, NAV_LINKS } from '../../core/data/nav-links';
import { ScrollStateService } from '../../core/services/scroll-state.service';

function currentPath(router: Router): string {
  return router.url.split(/[?#]/)[0].replace(/^\//, '');
}

@Component({
  selector: 'app-navbar',
  imports: [IconComponent, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
})
export class NavbarComponent {
  private readonly scrollState = inject(ScrollStateService);
  private readonly router = inject(Router);

  protected readonly navLinks = NAV_LINKS;
  protected readonly loginUrl = LOGIN_URL;

  private readonly path = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map(() => currentPath(this.router)),
    ),
    { initialValue: currentPath(this.router) },
  );

  protected readonly isHomeRoute = computed(() => this.path() === '');
  protected readonly opaque = computed(() => this.scrollState.navScrolled() || !this.isHomeRoute());

  protected mobileMenuOpen = false;

  protected toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  protected closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }
}
