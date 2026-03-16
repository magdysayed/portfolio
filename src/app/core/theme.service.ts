import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'magdy-portfolio.theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly theme = signal<Theme>('dark');

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  init() {
    const stored = this.safeGetStoredTheme();
    const preferred = this.getPreferredTheme();
    this.setTheme(stored ?? preferred);
  }

  toggle() {
    this.setTheme(this.theme() === 'dark' ? 'light' : 'dark');
  }

  setTheme(theme: Theme) {
    this.theme.set(theme);
    this.document.documentElement.setAttribute('data-theme', theme);
    this.safeStoreTheme(theme);
  }

  private getPreferredTheme(): Theme {
    const isLight = this.document.defaultView?.matchMedia?.('(prefers-color-scheme: light)')?.matches;
    return isLight ? 'light' : 'dark';
  }

  private safeGetStoredTheme(): Theme | null {
    try {
      const value = localStorage.getItem(STORAGE_KEY);
      if (value === 'dark' || value === 'light') return value;
      return null;
    } catch {
      return null;
    }
  }

  private safeStoreTheme(theme: Theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // ignore
    }
  }
}

