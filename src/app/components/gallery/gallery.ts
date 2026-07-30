import { Component } from '@angular/core';

interface GalleryItem {
  image: string;
  title: string;
  tag: string;
  span: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.html',
})
export class GalleryComponent {
  protected readonly gallery: GalleryItem[] = [
    {
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      title: 'Port Operations',
      tag: 'Sea Freight',
      span: 'row-span-2',
    },
    {
      image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80',
      title: 'Fleet on the Move',
      tag: 'Road Transport',
      span: '',
    },
    {
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
      title: 'Loading Dock',
      tag: 'Warehousing',
      span: '',
    },
    {
      image: 'https://images.unsplash.com/photo-1600661653561-629509216228?auto=format&fit=crop&w=800&q=80',
      title: 'Cargo Terminal',
      tag: 'Air Freight',
      span: 'row-span-2',
    },
    {
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
      title: 'Container Yard',
      tag: 'Sea Freight',
      span: '',
    },
    {
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80',
      title: 'Night Dispatch',
      tag: 'Express Delivery',
      span: '',
    },
  ];
}
