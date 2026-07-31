import { Component, inject } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon';
import { ScrollStateService } from '../../core/services/scroll-state.service';

const AMIT_WHATSAPP_NUMBER = '919452938895';
const WHATSAPP_GREETING = 'Hello, I would like to enquire about a shipment with Shri Krishna Logistics.';

@Component({
  selector: 'app-floating-actions',
  imports: [IconComponent],
  templateUrl: './floating-actions.html',
})
export class FloatingActionsComponent {
  private readonly scrollState = inject(ScrollStateService);

  protected readonly showBackToTop = this.scrollState.showBackToTop;
  protected readonly whatsappUrl = `https://wa.me/${AMIT_WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_GREETING)}`;

  protected scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
