import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  template: `
    <svg
      [attr.viewBox]="'0 0 24 24'"
      fill="none"
      class="h-full w-full"
      stroke="currentColor"
      stroke-width="1.6"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      @switch (name()) {
        @case ('truck') {
          <rect x="1.5" y="7" width="12" height="9" rx="1" />
          <path d="M13.5 10h4l3 3v3h-7z" />
          <circle cx="6" cy="18" r="1.6" />
          <circle cx="17" cy="18" r="1.6" />
        }
        @case ('plane') {
          <path d="M21 3 3 10.5l6.5 2 2 6.5L21 3Z" />
          <path d="M11.5 12.5 21 3" />
        }
        @case ('ship') {
          <path d="M3 15h18l-2 5H5l-2-5Z" />
          <path d="M6 15V8h9l3 7" />
          <path d="M12 8V3" />
          <path d="M9.5 5h5" />
        }
        @case ('train') {
          <rect x="5" y="3" width="14" height="14" rx="3" />
          <path d="M5 12h14" />
          <path d="M8 6.5h3M13 6.5h3" />
          <circle cx="8" cy="20" r="1" />
          <circle cx="16" cy="20" r="1" />
          <path d="M8.5 17 6.5 21M15.5 17l2 4" />
        }
        @case ('warehouse') {
          <path d="M3 21V10l9-6 9 6v11Z" />
          <path d="M3 10h18" />
          <rect x="9.5" y="14" width="5" height="7" />
        }
        @case ('bolt') {
          <path d="M13 2 4 14h6.5L10 22l9.5-13H13l1-7Z" />
        }
        @case ('location') {
          <path d="M12 21s-7-6.2-7-11.2A7 7 0 0 1 19 9.8C19 14.8 12 21 12 21Z" />
          <circle cx="12" cy="9.8" r="2.4" />
        }
        @case ('network') {
          <circle cx="12" cy="4.5" r="2" />
          <circle cx="5" cy="18" r="2" />
          <circle cx="19" cy="18" r="2" />
          <path d="M12 6.5v5M12 11.5 6.3 16.4M12 11.5l5.7 4.9" />
        }
        @case ('globe') {
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c2.8 2.6 4.2 5.8 4.2 9s-1.4 6.4-4.2 9c-2.8-2.6-4.2-5.8-4.2-9s1.4-6.4 4.2-9Z" />
        }
        @case ('radar') {
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5.5" />
          <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
          <path d="M12 12 18 6" />
        }
        @case ('shield') {
          <path d="M12 3 4.5 6v6c0 5 3.2 8 7.5 9 4.3-1 7.5-4 7.5-9V6L12 3Z" />
          <path d="M8.7 12.2l2.2 2.2 4.4-4.6" />
        }
        @case ('headset') {
          <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
          <rect x="3" y="13" width="4" height="5.5" rx="1.4" />
          <rect x="17" y="13" width="4" height="5.5" rx="1.4" />
          <path d="M19.5 18.5v.5a3 3 0 0 1-3 3H13" />
        }
        @case ('team') {
          <circle cx="9" cy="8" r="3" />
          <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
          <circle cx="17" cy="8.5" r="2.4" />
          <path d="M15.3 14.3c2.9.4 5.2 2.5 5.2 5.7" />
        }
        @case ('package') {
          <path d="M3.5 8 12 4l8.5 4-8.5 4-8.5-4Z" />
          <path d="M3.5 8v8l8.5 4 8.5-4V8" />
          <path d="M12 12v8" />
        }
        @case ('smile') {
          <circle cx="12" cy="12" r="9" />
          <path d="M8.5 14.5c1 1.3 2.2 2 3.5 2s2.5-.7 3.5-2" />
          <path d="M8.7 9.5h.01M15.3 9.5h.01" stroke-width="2.6" />
        }
        @case ('calendar') {
          <rect x="3.5" y="5" width="17" height="15" rx="2" />
          <path d="M3.5 10h17" />
          <path d="M8 3v4M16 3v4" />
        }
        @case ('clipboard') {
          <rect x="5" y="4.5" width="14" height="16" rx="2" />
          <rect x="9" y="3" width="6" height="3" rx="1" />
          <path d="M8.5 11h7M8.5 14.5h7M8.5 18h4.5" />
        }
        @case ('box') {
          <path d="M12 2 20.5 7v10L12 22 3.5 17V7Z" />
          <path d="M3.5 7 12 12l8.5-5" />
          <path d="M12 12v10" />
        }
        @case ('route') {
          <circle cx="5" cy="6" r="2" />
          <circle cx="19" cy="18" r="2" />
          <path d="M5 8v3a3 3 0 0 0 3 3h4a3 3 0 0 1 3 3v1" stroke-dasharray="2.5 2.5" />
        }
        @case ('check') {
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12.5 10.7 15 16 9.3" />
        }
        @case ('quote') {
          <path d="M7.5 8.5C5 8.5 3.5 10.3 3.5 13c0 2.4 1.7 4 3.8 4v-2.3c-.9 0-1.4-.6-1.4-1.6h1.6v-4.6Z" fill="currentColor" stroke="none" />
          <path d="M16.5 8.5c-2.5 0-4 1.8-4 4.5 0 2.4 1.7 4 3.8 4v-2.3c-.9 0-1.4-.6-1.4-1.6h1.6V8.5Z" fill="currentColor" stroke="none" />
        }
        @case ('phone') {
          <path d="M5 4h3l1.5 4.5L7 10.5a12 12 0 0 0 6.5 6.5l2-2.5 4.5 1.5v3a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3.5 5.6 1.5 1.5 0 0 1 5 4Z" />
        }
        @case ('mail') {
          <rect x="3" y="5.5" width="18" height="13" rx="2" />
          <path d="M3.5 6.5 12 13l8.5-6.5" />
        }
        @case ('clock') {
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5.3l3.5 2" />
        }
        @case ('pin') {
          <path d="M12 21s-7-6.2-7-11.2A7 7 0 0 1 19 9.8C19 14.8 12 21 12 21Z" />
          <circle cx="12" cy="9.8" r="2.4" />
        }
        @case ('flag-india') {
          <rect x="1" y="6" width="22" height="12" rx="1.5" fill="#ffffff" stroke="none" />
          <path d="M1 6h22v4H1z" fill="#ff9933" stroke="none" />
          <path d="M1 14h22v4H1z" fill="#128807" stroke="none" />
          <rect x="1" y="6" width="22" height="12" rx="1.5" fill="none" stroke="#0a2757" stroke-width="0.8" />
          <circle cx="12" cy="12" r="1.8" fill="none" stroke="#0a2757" stroke-width="0.5" />
          <circle cx="12" cy="12" r="0.45" fill="#0a2757" stroke="none" />
          <path
            d="M12 10.2v3.6M10.2 12h3.6M10.7 10.7l2.6 2.6M13.3 10.7l-2.6 2.6"
            stroke="#0a2757"
            stroke-width="0.35"
          />
        }
        @case ('flag-nepal') {
          <rect x="1" y="6" width="22" height="12" rx="1.5" fill="#dc143c" stroke="none" />
          <rect x="1" y="6" width="22" height="12" rx="1.5" fill="none" stroke="#003893" stroke-width="1" />
          <circle cx="8.5" cy="10" r="1.6" fill="none" stroke="#ffffff" stroke-width="0.7" />
          <path
            d="M15.5 13l0.6 1.3 1.4.15-1 .95.3 1.35-1.3-.8-1.3.8.3-1.35-1-.95 1.4-.15z"
            fill="#ffffff"
            stroke="none"
          />
        }
        @case ('home') {
          <path d="M4 11 12 4l8 7" />
          <path d="M6 9.5V20h12V9.5" />
          <path d="M10 20v-6h4v6" />
        }
        @case ('search') {
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="M20 20l-4.8-4.8" />
        }
        @case ('menu') {
          <path d="M4 7h16M4 12h16M4 17h16" />
        }
        @case ('close') {
          <path d="M6 6l12 12M18 6 6 18" />
        }
        @case ('arrow-up') {
          <path d="M12 19V5M6 11l6-6 6 6" />
        }
        @case ('arrow-right') {
          <path d="M5 12h14M13 6l6 6-6 6" />
        }
        @case ('star') {
          <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.7l-5.2 2.9 1-5.8-4.3-4.1 5.9-.9L12 3.5Z" />
        }
        @case ('facebook') {
          <path
            d="M14 21v-7.5h2.4l.4-3H14V8.4c0-.9.2-1.5 1.5-1.5H17V4.1C16.7 4.1 15.6 4 14.4 4 11.9 4 10.2 5.5 10.2 8.2v2.3H7.5v3h2.7V21Z"
            fill="currentColor"
            stroke="none"
          />
        }
        @case ('twitter') {
          <path d="M5 5l14 14M19 5 5 19" />
        }
        @case ('linkedin') {
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <circle cx="8" cy="9" r="1" fill="currentColor" stroke="none" />
          <path d="M8 12.5v6" />
          <path d="M12.2 18.5v-4c0-1.4.9-2.4 2.3-2.4s2.3 1 2.3 2.4v4" />
        }
        @case ('instagram') {
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
        }
        @case ('whatsapp') {
          <path
            d="M12 3.5A8.5 8.5 0 0 0 4.3 15.9L3 21l5.3-1.4A8.5 8.5 0 1 0 12 3.5Z"
          />
          <path
            d="M8.8 8.4c.2-.5.4-.5.6-.5h.5c.2 0 .4 0 .5.4.2.4.6 1.5.7 1.6.1.2.1.3 0 .5-.1.2-.2.3-.3.5-.2.2-.3.3-.1.6.2.4.9 1.4 1.9 2.2 1.3 1.1 2.3 1.4 2.7 1.6.3.1.5.1.7-.1.2-.2.7-.8.9-1.1.2-.2.4-.2.6-.1l1.7.8c.2.1.4.2.4.4.1.2.1 1-.3 1.9-.3.9-1.8 1.7-2.5 1.8-.7.1-1.3.2-3.9-.9-3.2-1.4-5.3-4.6-5.5-4.8-.2-.2-1.3-1.7-1.3-3.3 0-1.6.8-2.3 1.1-2.6Z"
            fill="currentColor"
            stroke="none"
          />
        }
        @default {
          <circle cx="12" cy="12" r="9" />
        }
      }
    </svg>
  `,
})
export class IconComponent {
  name = input.required<string>();
}
