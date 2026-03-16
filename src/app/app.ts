import { Component, OnInit, inject, signal } from '@angular/core';
import { ThemeService } from './core/theme.service';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SiteFooterComponent } from './shared/site-footer/site-footer.component';
import { AboutComponent } from './sections/about/about.component';
import { CompetitionsComponent } from './sections/competitions/competitions.component';
import { ContactComponent } from './sections/contact/contact.component';
import { EducationComponent } from './sections/education/education.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { HeroComponent } from './sections/hero/hero.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { SkillsComponent } from './sections/skills/skills.component';
import AOS from 'aos';
import { BackToTopComponent } from './shared/back-to-top/back-to-top.component';
import { LoadingScreenComponent } from './shared/loading-screen/loading-screen.component';
import { ScrollProgressComponent } from './shared/scroll-progress/scroll-progress.component';

@Component({
  selector: 'app-root',
  imports: [
    ScrollProgressComponent,
    LoadingScreenComponent,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    CompetitionsComponent,
    EducationComponent,
    ContactComponent,
    SiteFooterComponent,
    BackToTopComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private readonly theme = inject(ThemeService);
  protected readonly loading = signal(true);

  ngOnInit(): void {
    this.theme.init();

    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
    AOS.init({
      once: true,
      duration: reduceMotion ? 0 : 750,
      offset: 80,
      easing: 'ease-out-cubic',
      disable: reduceMotion,
    });

    // Small intentional delay to avoid a flash on fast loads
    const minMs = 450;
    const start = performance.now();
    const done = () => {
      const elapsed = performance.now() - start;
      const wait = Math.max(0, minMs - elapsed);
      window.setTimeout(() => this.loading.set(false), wait);
    };

    if (document.readyState === 'complete') done();
    else window.addEventListener('load', done, { once: true });
  }
}
