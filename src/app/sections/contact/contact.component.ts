import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PROFILE } from '../../core/portfolio-data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  protected readonly profile = PROFILE;
  protected readonly sending = signal(false);
  protected readonly sent = signal(false);

  private readonly fb = new FormBuilder();
  protected readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  protected readonly canSubmit = computed(() => this.form.valid && !this.sending());

  submit() {
    this.sent.set(false);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.sending.set(true);
    const v = this.form.getRawValue();

    const subject = encodeURIComponent(`[Portfolio] ${v.subject ?? ''}`.trim());
    const body = encodeURIComponent(
      `Name: ${v.name}\nEmail: ${v.email}\n\n${v.message ?? ''}`.trim(),
    );

    // Mailto is a reliable zero-backend option for a portfolio
    const href = `mailto:${this.profile.email}?subject=${subject}&body=${body}`;
    window.location.href = href;

    setTimeout(() => {
      this.sending.set(false);
      this.sent.set(true);
      this.form.reset();
    }, 600);
  }
}

