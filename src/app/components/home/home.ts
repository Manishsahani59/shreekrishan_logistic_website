import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../shared/icon/icon';
import { HeroComponent } from '../hero/hero';
import { WhyChooseUsComponent } from '../why-choose-us/why-choose-us';
import { StatsComponent } from '../stats/stats';
import { TestimonialsComponent } from '../testimonials/testimonials';
import { PartnersComponent } from '../partners/partners';
import { LocationMapComponent } from '../location-map/location-map';

interface OverviewItem {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  imports: [
    IconComponent,
    RouterLink,
    HeroComponent,
    WhyChooseUsComponent,
    StatsComponent,
    TestimonialsComponent,
    PartnersComponent,
    LocationMapComponent,
  ],
  templateUrl: './home.html',
})
export class HomeComponent {
  protected readonly coreServices: OverviewItem[] = [
    {
      icon: 'box',
      title: 'Goods Booking',
      description: 'All types of goods booking service.',
    },
    {
      icon: 'truck',
      title: 'Full Truck Load (FTL)',
      description: 'FTL service for all over India & Nepal.',
    },
    {
      icon: 'globe',
      title: 'India – Nepal Freight',
      description: 'Safe, fast & reliable freight service.',
    },
    {
      icon: 'shield',
      title: 'India – Nepal Customs Clearance',
      description: 'Complete customs clearance support.',
    },
    {
      icon: 'home',
      title: 'Door to Door Transport',
      description: 'Safe & secure door to door delivery.',
    },
  ];

  protected readonly servicesOverview: OverviewItem[] = [
    {
      icon: 'warehouse',
      title: 'Warehousing',
      description:
        'Efficiently manage the storage, handling, and distribution of goods within a facility to streamline logistics and ensure smooth transportation operations.',
    },
    {
      icon: 'network',
      title: 'Supply Chain Management',
      description:
        'We manage and optimize all aspects of goods and materials movement, ensuring smooth and efficient delivery from suppliers to customers. Our focus is on seamless coordination, improving supply chain performance and minimizing delays for timely, reliable service.',
    },
    {
      icon: 'star',
      title: 'Affordable Costs',
      description:
        'Reducing costs while maximizing efficiency in the logistics and movement of goods and services. We focus on streamlining coordination to ensure seamless operations and optimal value for our clients.',
    },
    {
      icon: 'bolt',
      title: 'Efficient and Effective',
      description:
        'Efficiency is about completing tasks with minimal resources — time, cost, and fuel — while effectiveness focuses on achieving desired outcomes, such as timely deliveries and customer satisfaction, while meeting goals and targets.',
    },
  ];

  protected readonly solutions: OverviewItem[] = [
    {
      icon: 'truck',
      title: 'Full Truck Load (FTL)',
      description:
        'Our Full-Truckload (FTL) logistics can assist you with all of your high volume, high-capacity needs at a low cost and in a timely manner.',
    },
    {
      icon: 'box',
      title: 'Container Logistics',
      description:
        "We're delighted to give all of our shipping container clients the most cost-effective and reliable bulk cargo and general cargo transportation options.",
    },
    {
      icon: 'warehouse',
      title: 'Warehousing & Logistics',
      description:
        'We offer a unique and safe storage option for both individuals and organisations. Whether you need to store corporate inventory or domestic items, our flexible storage plans can accommodate you.',
    },
    {
      icon: 'package',
      title: 'Parcel Load Service',
      description:
        'Parcel Load Service ensures efficient, secure, and timely transportation of goods, catering to both individual and bulk shipping needs. Experience seamless logistics with reliable tracking and delivery solutions.',
    },
  ];
}
