import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IconComponent } from '../../shared/icon/icon';
import { FaqComponent } from '../faq/faq';
import { BranchesComponent } from '../branches/branches';
import { GOOGLE_MAPS_EMBED_URL } from '../../core/data/map';

const RECIPIENT_EMAIL = 'info@shrikrishnalogistics.in';

@Component({
  selector: 'app-contact',
  imports: [IconComponent, FaqComponent, BranchesComponent, ReactiveFormsModule],
  templateUrl: './contact.html',
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);

  protected readonly services = ['Road Transport', 'Air Freight', 'Sea Freight', 'Warehousing', 'Other'];
  protected readonly mapUrl: SafeResourceUrl;

  protected readonly contactForm = this.fb.nonNullable.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    service: ['Road Transport', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  constructor(sanitizer: DomSanitizer) {
    this.mapUrl = sanitizer.bypassSecurityTrustResourceUrl(GOOGLE_MAPS_EMBED_URL);
  }

  protected isInvalid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!control && control.invalid && (control.dirty || control.touched);
  }

  protected onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const { fullName, email, service, message } = this.contactForm.getRawValue();

    const subject = `New Enquiry — ${service}`;
    const body =
      `Name: ${fullName}\n` +
      `Email: ${email}\n` +
      `Service Needed: ${service}\n\n` +
      `Message:\n${message}`;

    const mailtoUrl = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;

    this.contactForm.reset({ service: 'Road Transport' });
  }
}
