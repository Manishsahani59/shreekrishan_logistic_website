import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { DEFAULT_SEO, SEO_ROUTES, SITE_URL } from '../data/seo';

function currentPath(router: Router): string {
  return router.url.split(/[?#]/)[0].replace(/^\//, '');
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly router = inject(Router);
  private readonly titleService = inject(Title);
  private readonly meta = inject(Meta);

  constructor() {
    this.apply(currentPath(this.router));
    this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd)).subscribe(() => {
      this.apply(currentPath(this.router));
    });
  }

  private apply(path: string): void {
    const seo = SEO_ROUTES[path] ?? DEFAULT_SEO;
    const url = path ? `${SITE_URL}/${path}` : SITE_URL;

    this.titleService.setTitle(seo.title);
    this.meta.updateTag({ name: 'description', content: seo.description });
    this.meta.updateTag({ property: 'og:title', content: seo.title });
    this.meta.updateTag({ property: 'og:description', content: seo.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ name: 'twitter:title', content: seo.title });
    this.meta.updateTag({ name: 'twitter:description', content: seo.description });
    this.setCanonical(url);
  }

  private setCanonical(url: string): void {
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
