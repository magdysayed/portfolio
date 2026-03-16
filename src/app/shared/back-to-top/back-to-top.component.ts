import { CommonModule } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './back-to-top.component.html',
  styleUrl: './back-to-top.component.scss',
})
export class BackToTopComponent {
  protected readonly show = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.show.set(window.scrollY > 650);
  }

  go() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

