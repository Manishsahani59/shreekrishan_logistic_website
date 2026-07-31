import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon/icon';

interface FaqItem {
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  selector: 'app-faq',
  imports: [IconComponent],
  templateUrl: './faq.html',
})
export class FaqComponent {
  protected readonly faqs: FaqItem[] = [
    {
      question: 'What regions does Shri Krishna Logistics operate in?',
      answer:
        'We operate across India, Nepal and China, with border offices at Sonauli, Raxaul and Rupediha and a growing branch network across all three countries.',
      open: true,
    },
    {
      question: 'Can I track my shipment in real time?',
      answer:
        'Yes. Every shipment is assigned a tracking ID that gives you live visibility into its location and status, from pickup through final delivery.',
      open: false,
    },
    {
      question: 'Do you handle both small parcels and bulk freight?',
      answer:
        'Absolutely. Our network covers everything from express parcels and LTL loads to full container and full truckload shipments.',
      open: false,
    },
    {
      question: 'Is my cargo insured during transport?',
      answer:
        'All shipments are covered under comprehensive cargo insurance, with additional coverage options available for high-value goods.',
      open: false,
    },
    {
      question: 'How quickly can I get a freight quote?',
      answer:
        'Most quote requests are answered within a few business hours. Enterprise accounts get a dedicated account manager for instant pricing.',
      open: false,
    },
  ];

  protected toggleFaq(index: number): void {
    this.faqs.forEach((f, i) => {
      f.open = i === index ? !f.open : false;
    });
  }

  protected scrollToContactForm(): void {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  }
}
