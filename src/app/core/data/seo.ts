export interface SeoMeta {
  title: string;
  description: string;
}

export const SITE_URL = 'https://shrikrishna-logistics.vercel.app';
export const SITE_NAME = 'Shri Krishna Logistics';

export const SEO_ROUTES: Record<string, SeoMeta> = {
  '': {
    title: 'Shri Krishna Logistics — India-Nepal Transport & Customs Clearance',
    description:
      'Shri Krishna Logistics delivers goods booking, Full Truck Load (FTL), India-Nepal freight and customs clearance, and door-to-door transport across India, Nepal and China.',
  },
  about: {
    title: 'About Us | Shri Krishna Logistics',
    description:
      'Learn about Shri Krishna Logistics — a trusted transport and customs clearance company serving India, Nepal and China from our head office in Sonauli.',
  },
  services: {
    title: 'Our Services | Shri Krishna Logistics',
    description:
      'Goods booking, Full Truck Load (FTL), India-Nepal freight, customs clearance and door-to-door delivery — explore our complete transport services.',
  },
  clients: {
    title: 'Our Clients | Shri Krishna Logistics',
    description: 'Trusted by leading brands across India for reliable, on-time freight and logistics solutions.',
  },
  process: {
    title: 'Our Process | Shri Krishna Logistics',
    description: 'See how Shri Krishna Logistics manages your shipment from booking through to final delivery.',
  },
  gallery: {
    title: 'Gallery | Shri Krishna Logistics',
    description: 'A look at the Shri Krishna Logistics fleet, operations and team in action across India and Nepal.',
  },
  contact: {
    title: 'Contact Us | Shri Krishna Logistics',
    description:
      'Contact Shri Krishna Logistics — head office in Sonauli with branches across India and Nepal. Call, WhatsApp or email us for a quote.',
  },
};

export const DEFAULT_SEO: SeoMeta = SEO_ROUTES[''];
