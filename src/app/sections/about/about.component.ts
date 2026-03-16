import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ABOUT_TEXT, QUICK_STATS } from '../../core/portfolio-data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements AfterViewInit, OnDestroy {
  protected readonly stats = QUICK_STATS;
  protected readonly displayValues = signal<string[]>(this.stats.map((s) => (s.to == null ? s.value : '0')));

  @ViewChild('aboutSection', { static: true }) aboutSection!: ElementRef<HTMLElement>;

  private observer?: IntersectionObserver;
  private animated = false;

  protected readonly richText: SafeHtml;

  constructor(private readonly sanitizer: DomSanitizer) {
    this.richText = this.sanitizer.bypassSecurityTrustHtml(this.buildHighlightedHtml(ABOUT_TEXT));
  }

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries.some((e) => e.isIntersecting);
        if (!isVisible || this.animated) return;
        this.animated = true;
        this.animateCounts();
      },
      { threshold: 0.35 },
    );

    this.observer.observe(this.aboutSection.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private animateCounts() {
    const start = performance.now();
    const duration = 900;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);

      const next = this.stats.map((s) => {
        if (s.to == null) return s.value;
        const v = Math.round(s.to * eased);
        return `${v}${s.suffix ?? ''}`;
      });

      this.displayValues.set(next);
      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }

  private buildHighlightedHtml(text: string) {
    const keywords = [
      'Frontend Development',
      'Data Analysis',
      'Programming Education',
      'Arduino Development',
      'Kafrelsheikh University',
    ];

    return keywords.reduce((acc, kw) => {
      const safeKw = kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      return acc.replace(new RegExp(safeKw, 'g'), `<span class="hl">${kw}</span>`);
    }, text);
  }
}

