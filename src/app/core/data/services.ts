export interface Service {
  icon: string;
  title: string;
  description?: string;
  features?: string[];
}

export const SERVICES: Service[] = [
  {
    icon: 'truck',
    title: 'Transport',
    description:
      'Partner with us for seamless, hassle-free transportation that ensures your goods reach their destination on time and in perfect condition.',
  },
  {
    icon: 'network',
    title: '3PL Services',
    description: 'The best solution for efficient supply chain operations.',
  },
  {
    icon: 'globe',
    title: 'Clearing, Forwarding & Goods',
    description:
      'We generate all relevant clearing documentation and handle your load from loading point to offloading point, through all borders.',
  },
  {
    icon: 'warehouse',
    title: 'Material Handling & Warehouse',
    features: ['Warehousing', 'Bagging or re-bagging', 'Containerization', 'Loss control, inventory and stock levels'],
  },
  {
    icon: 'clipboard',
    title: 'Consulting & Fleet Management',
    description:
      'We implement and manage transport initiatives for our customers, including owner-driver schemes, and evaluate customer needs to propose, implement and operate the most efficient supply chain solution for their business.',
  },
];
