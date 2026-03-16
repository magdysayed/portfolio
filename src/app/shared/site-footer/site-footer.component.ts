import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PROFILE } from '../../core/portfolio-data';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.scss',
})
export class SiteFooterComponent {
  protected readonly profile = PROFILE;
  protected readonly year = new Date().getFullYear();

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

