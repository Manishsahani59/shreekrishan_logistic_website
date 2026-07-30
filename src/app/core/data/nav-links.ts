export interface NavLink {
  label: string;
  path: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '' },
  { label: 'About', path: 'about' },
  { label: 'Services', path: 'services' },
  { label: 'Our Clients', path: 'clients' },
  { label: 'Process', path: 'process' },
  { label: 'Gallery', path: 'gallery' },
  { label: 'Contact', path: 'contact' },
];

export const LOGIN_URL = 'http://116.74.122.85:8080/SKL/Login.aspx';
