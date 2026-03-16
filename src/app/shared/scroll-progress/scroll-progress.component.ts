import { CommonModule } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-progress.component.html',
  styleUrl: './scroll-progress.component.scss',
})
export class ScrollProgressComponent {
  protected readonly progress = signal(0);

  @HostListener('window:scroll')
  onScroll() {
    const doc = document.documentElement;
    const max = Math.max(1, doc.scrollHeight - doc.clientHeight);
    const value = Math.min(100, Math.max(0, (doc.scrollTop / max) * 100));
    this.progress.set(value);
  }
}

