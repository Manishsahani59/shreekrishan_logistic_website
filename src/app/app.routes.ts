import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { AboutComponent } from './components/about/about';
import { ServicesComponent } from './components/services/services';
import { ClientsComponent } from './components/clients/clients';
import { ProcessComponent } from './components/process/process';
import { GalleryComponent } from './components/gallery/gallery';
import { ContactComponent } from './components/contact/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'process', component: ProcessComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' },
];
