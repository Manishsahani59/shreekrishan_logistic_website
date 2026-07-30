import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../shared/icon/icon';

@Component({
  selector: 'app-hero',
  imports: [IconComponent, RouterLink],
  templateUrl: './hero.html',
})
export class HeroComponent implements OnInit, OnDestroy {
  protected readonly heroStats = [
    { value: '18K+', label: 'Deliveries / month' },
    { value: '42', label: 'Countries served' },
    { value: '99.6%', label: 'On-time rate' },
  ];

  protected readonly slides = [
    'hero/banner1.jpg',
    'hero/banner5.jpg',
    'hero/banner4.jpg',
    'hero/banner6.jpg',
  ];

  protected readonly activeSlide = signal(0);

  private intervalId?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.activeSlide.set((this.activeSlide() + 1) % this.slides.length);
    }, 3000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
