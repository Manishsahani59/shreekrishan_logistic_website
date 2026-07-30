import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../shared/icon/icon';
import { LocationMapComponent } from '../location-map/location-map';

interface Visionary {
  name: string;
  role: string;
  photo: string;
}

interface CoreValue {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  imports: [IconComponent, RouterLink, LocationMapComponent],
  templateUrl: './about.html',
})
export class AboutComponent {
  protected readonly highlights = [
    '6+ decades of trustworthy transport experience',
    '200+ vehicles in our nationwide fleet',
    '50+ branches across major Indian states',
    '70 years of combined operational experience',
  ];

  protected readonly visionaries: Visionary[] = [
    { name: 'Amit Sahani', role: 'Founder & Operation Head', photo: 'team/amit-sahani.jpg' },
    { name: 'Bhola Sahani', role: 'Co-Founder & Logistics Head', photo: 'team/bhola-sahani.jpg' },
  ];

  protected readonly coreValues: CoreValue[] = [
    {
      icon: 'truck',
      title: 'Fleet Strength',
      description: 'We have our own fleet of 150 trucks and 300 more permanently attached with us.',
    },
    {
      icon: 'shield',
      title: 'I.B.A Approved',
      description: "We are approved by the Indian Banks' Association and hold a Bank Approved GR under code KPM-004.",
    },
    {
      icon: 'clipboard',
      title: 'Carriage by Road Rules',
      description:
        'We hold a valid Certificate of Registration from the State Transport Department under the Carriage by Road Rules, 2011 and Carriage by Road Act, 2007.',
    },
    {
      icon: 'star',
      title: '70 Years of Experience',
      description:
        'About 70 years of practical experience in handling and transporting all types of goods and sophisticated products.',
    },
  ];

  protected readonly partnerMemberships = [
    'President, GCI Kanpur Industrial (2011)',
    'Managing committee member, UPMTA',
    'Member of Cawnpore Club, Ganges Club & Rotary Club',
    'Managing committee member, Sanatan Dharam Sabha & Sanatan Dharam Education Centre',
  ];
}
