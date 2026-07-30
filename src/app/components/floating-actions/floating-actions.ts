import { Component, inject } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon';
import { ScrollStateService } from '../../core/services/scroll-state.service';

@Component({
  selector: 'app-floating-actions',
  imports: [IconComponent],
  templateUrl: './floating-actions.html',
})
export class FloatingActionsComponent {
  private readonly scrollState = inject(ScrollStateService);

  protected readonly showBackToTop = this.scrollState.showBackToTop;

  protected scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
