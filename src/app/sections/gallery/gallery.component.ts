/* NEW FILE */
import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { GALLERY_IMAGE_PATHS } from '../../core/portfolio-data';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements OnInit, OnDestroy {
  /* NEW — image paths for the auto-sliding carousel */
  protected readonly images: string[] = GALLERY_IMAGE_PATHS;

  protected readonly currentIndex = signal(0);
  protected readonly failedImages = signal<Set<number>>(new Set());

  private intervalId?: ReturnType<typeof setInterval>;
  private readonly intervalMs = 1000;

  ngOnInit(): void {
    this.startCarousel();
    document.addEventListener('visibilitychange', this.handleVisibility);
  }

  ngOnDestroy(): void {
    this.stopCarousel();
    document.removeEventListener('visibilitychange', this.handleVisibility);
  }

  /* NEW — advance to the next valid image every 1 second */
  private startCarousel(): void {
    if (this.intervalId) return;
    this.intervalId = setInterval(() => {
      this.advance();
    }, this.intervalMs);
  }

  private stopCarousel(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  private advance(): void {
    const total = this.images.length;
    if (total === 0) return;

    let next = this.currentIndex();
    let attempts = 0;

    do {
      next = (next + 1) % total;
      attempts++;
    } while (this.failedImages().has(next) && attempts < total);

    // If every image failed, just stay where we are
    if (!this.failedImages().has(next)) {
      this.currentIndex.set(next);
    }
  }

  /* NEW — pause when tab is hidden, resume when visible */
  private handleVisibility = (): void => {
    if (document.hidden) {
      this.stopCarousel();
    } else {
      this.startCarousel();
    }
  };

  /* NEW — gracefully skip images that fail to load */
  onImageError(index: number): void {
    this.failedImages.update((set) => {
      const next = new Set(set);
      next.add(index);
      return next;
    });

    // Immediately advance if the currently shown image breaks
    if (this.currentIndex() === index) {
      this.advance();
    }
  }

  isImageFailed(index: number): boolean {
    return this.failedImages().has(index);
  }
}

