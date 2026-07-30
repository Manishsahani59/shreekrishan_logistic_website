import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollStateService {
  readonly navScrolled = signal(false);
  readonly showBackToTop = signal(false);

  onWindowScroll(y: number): void {
    this.navScrolled.set(y > 40);
    this.showBackToTop.set(y > 500);
  }
}
