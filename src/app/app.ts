import { AfterViewInit, Component, HostListener, OnDestroy, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { PageLoaderComponent } from './components/page-loader/page-loader';
import { NavbarComponent } from './components/navbar/navbar';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb';
import { FooterComponent } from './components/footer/footer';
import { FloatingActionsComponent } from './components/floating-actions/floating-actions';
import { ScrollStateService } from './core/services/scroll-state.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    PageLoaderComponent,
    NavbarComponent,
    BreadcrumbComponent,
    FooterComponent,
    FloatingActionsComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit, OnDestroy {
  private readonly scrollState = inject(ScrollStateService);
  private readonly router = inject(Router);

  private revealObserver?: IntersectionObserver;
  private routerSubscription?: Subscription;

  ngAfterViewInit(): void {
    setTimeout(() => this.hideLoader(), 900);
    this.setupRevealObserver();
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => setTimeout(() => this.setupRevealObserver(), 0));
  }

  ngOnDestroy(): void {
    this.revealObserver?.disconnect();
    this.routerSubscription?.unsubscribe();
  }

  private hideLoader(): void {
    const loader = document.getElementById('page-loader');
    loader?.classList.add('loader-hidden');
  }

  private setupRevealObserver(): void {
    this.revealObserver?.disconnect();
    const elements = document.querySelectorAll('.reveal');
    this.revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            this.revealObserver?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    elements.forEach((el) => this.revealObserver?.observe(el));
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.scrollState.onWindowScroll(window.scrollY);
  }
}
