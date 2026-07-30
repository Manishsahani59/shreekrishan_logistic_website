import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon';

interface ProcessStep {
  number: string;
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-process',
  imports: [IconComponent],
  templateUrl: './process.html',
})
export class ProcessComponent {
  protected readonly process: ProcessStep[] = [
    {
      number: '01',
      icon: 'clipboard',
      title: 'Book Shipment',
      description: 'Share your shipment details and get an instant, transparent quote online.',
    },
    {
      number: '02',
      icon: 'box',
      title: 'Package Pickup',
      description: 'Our team collects your cargo from your doorstep at a time that suits you.',
    },
    {
      number: '03',
      icon: 'route',
      title: 'Transportation',
      description: 'Your shipment moves through our optimized multi-modal network with live tracking.',
    },
    {
      number: '04',
      icon: 'check',
      title: 'Safe Delivery',
      description: 'Cargo arrives safely at its destination, verified with proof of delivery.',
    },
  ];
}
