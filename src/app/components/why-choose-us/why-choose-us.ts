import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-why-choose-us',
  imports: [IconComponent],
  templateUrl: './why-choose-us.html',
})
export class WhyChooseUsComponent {
  protected readonly features: Feature[] = [
    {
      icon: 'bolt',
      title: 'Fast Delivery',
      description: 'Optimized routes and a responsive fleet keep transit times short and predictable.',
    },
    {
      icon: 'globe',
      title: 'Cross-Border Network',
      description: 'A trusted network across India, Nepal and China, with dedicated support at every border crossing.',
    },
    {
      icon: 'radar',
      title: 'Real-Time Tracking',
      description: 'Live shipment visibility from pickup to delivery, right down to the last mile.',
    },
    {
      icon: 'shield',
      title: 'Secure Transport',
      description: 'Fully insured cargo, tamper-proof sealing and rigorous chain-of-custody protocols.',
    },
    {
      icon: 'headset',
      title: '24/7 Support',
      description: 'A dedicated operations team on standby around the clock, every day of the year.',
    },
    {
      icon: 'team',
      title: 'Experienced Team',
      description: 'Two decades of logistics expertise across land, air and sea operations.',
    },
  ];
}
