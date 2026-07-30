import { Component, OnDestroy, OnInit } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon';

interface Testimonial {
  logo: string;
  company: string;
  quote: string;
}

const AUTOPLAY_INTERVAL_MS = 6000;

@Component({
  selector: 'app-testimonials',
  imports: [IconComponent],
  templateUrl: './testimonials.html',
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  protected readonly testimonials: Testimonial[] = [
    {
      logo: 'raymond',
      company: 'Raymond',
      quote:
        'Every bale reaches its destination exactly as it left the mill — Shri Krishna Logistics handles our fabric consignments with a care that feels personal, not procedural.',
    },
    {
      logo: 'siyarams',
      company: "Siyaram's",
      quote:
        'Fashion runs on timing. Shri Krishna Logistics has never once made us miss a season launch, no matter how tight the shipping window.',
    },
    {
      logo: 'poddar-textiles',
      company: 'Poddar Textiles',
      quote:
        'Bulk textile freight can be unforgiving, but their team plans every route like it is the only shipment on the road that day.',
    },
    {
      logo: 'surat-saree-palace',
      company: 'Surat Saree Palace',
      quote:
        'Delicate sarees demand delicate hands. From loading to delivery, our stock arrives without a single crease out of place.',
    },
    {
      logo: 'govardhan-saree-center',
      company: 'Govardhan Saree Center',
      quote:
        'What we value most is the honesty — clear timelines, clear pricing, and a team that answers the phone before the second ring.',
    },
    {
      logo: 'shree-radha-madhav-textiles',
      company: 'Shree Radha Madhav Textiles',
      quote:
        'Years of partnership, and not once have we had to worry about where our shipment stands. That kind of reliability is rare.',
    },
  ];

  protected activeIndex = 0;
  private autoplayTimer?: ReturnType<typeof setInterval>;
  private paused = false;

  ngOnInit(): void {
    this.autoplayTimer = setInterval(() => {
      if (!this.paused) {
        this.next();
      }
    }, AUTOPLAY_INTERVAL_MS);
  }

  ngOnDestroy(): void {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
    }
  }

  protected pauseAutoplay(): void {
    this.paused = true;
  }

  protected resumeAutoplay(): void {
    this.paused = false;
  }

  protected next(): void {
    this.activeIndex = (this.activeIndex + 1) % this.testimonials.length;
  }

  protected prev(): void {
    this.activeIndex = (this.activeIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  protected goTo(index: number): void {
    this.activeIndex = index;
  }
}
