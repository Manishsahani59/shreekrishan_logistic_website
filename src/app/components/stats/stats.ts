import { AfterViewInit, Component, ElementRef, OnDestroy, inject } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon';

interface StatItem {
  icon: string;
  target: number;
  suffix: string;
  label: string;
  current: number;
}

@Component({
  selector: 'app-stats',
  imports: [IconComponent],
  templateUrl: './stats.html',
})
export class StatsComponent implements AfterViewInit, OnDestroy {
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  protected readonly stats: StatItem[] = [
    { icon: 'network', target: 50, suffix: '+', label: 'Branches', current: 0 },
    { icon: 'calendar', target: 60, suffix: '+', label: 'Years Experience', current: 0 },
    { icon: 'truck', target: 300, suffix: '+', label: 'Fleets', current: 0 },
    { icon: 'smile', target: 200, suffix: 'K+', label: 'Satisfied Customers', current: 0 },
  ];

  private statsAnimated = false;
  private statsObserver?: IntersectionObserver;
  private countRaf: number[] = [];

  ngAfterViewInit(): void {
    const section = this.elementRef.nativeElement.querySelector('#stats-section');
    if (!section) return;

    this.statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.statsAnimated) {
            this.statsAnimated = true;
            this.animateStats();
            this.statsObserver?.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );
    this.statsObserver.observe(section);
  }

  ngOnDestroy(): void {
    this.statsObserver?.disconnect();
    this.countRaf.forEach((id) => cancelAnimationFrame(id));
  }

  private animateStats(): void {
    const duration = 1800;
    const start = performance.now();
    const targets = this.stats.map((s) => s.target);

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      this.stats.forEach((stat, i) => {
        stat.current = Math.floor(targets[i] * eased);
      });
      if (progress < 1) {
        this.countRaf.push(requestAnimationFrame(step));
      } else {
        this.stats.forEach((stat, i) => (stat.current = targets[i]));
      }
    };
    this.countRaf.push(requestAnimationFrame(step));
  }

  protected formatStat(stat: StatItem): string {
    return `${stat.current.toLocaleString('en-US')}${stat.suffix}`;
  }
}
