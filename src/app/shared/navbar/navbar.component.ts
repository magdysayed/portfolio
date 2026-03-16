import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';
import { ThemeService } from '../../core/theme.service';
import { PROFILE } from '../../core/portfolio-data';

type NavItem = { label: string; id: string };

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  protected readonly profile = PROFILE;
  protected readonly theme = inject(ThemeService);

  protected readonly open = signal(false);
  protected readonly scrolled = signal(false);

  protected readonly items: NavItem[] = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Competitions', id: 'competitions' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ];

  toggleMenu() {
    this.open.set(!this.open());
  }

  closeMenu() {
    this.open.set(false);
  }

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.closeMenu();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 12);
  }
}

