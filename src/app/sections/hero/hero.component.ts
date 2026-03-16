import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import Typed from 'typed.js';
import { PROFILE } from '../../core/portfolio-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  protected readonly profile = PROFILE;

  @ViewChild('typedEl', { static: true }) typedEl!: ElementRef<HTMLElement>;

  private typed?: Typed;

  ngAfterViewInit(): void {
    this.typed = new Typed(this.typedEl.nativeElement, {
      strings: ['Data Analyst', 'Frontend Developer', 'Programming Instructor'],
      typeSpeed: 55,
      backSpeed: 28,
      showCursor: true,
      cursorChar: '|',
      loop: true,
      backDelay: 900,
      smartBackspace: true,
    });
  }

  ngOnDestroy(): void {
    this.typed?.destroy();
  }

  scrollToProjects() {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

