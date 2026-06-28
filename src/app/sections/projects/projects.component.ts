/**
 * Project cover images live in: src/assets/images/projects/
 * Reference them in portfolio-data.ts as: assets/images/projects/<filename>.png
 */

import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { PROJECTS, Project, ProjectCategory } from '../../core/portfolio-data';

type Filter = 'All' | ProjectCategory;

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  // EDITED: Removed Frontend/Mix categories; now Data Engineering and Data Analysis only
  private readonly all: Project[] = PROJECTS;

  protected readonly filter = signal<Filter>('All');
  protected readonly filters: Filter[] = ['All', 'AI Automation', 'Data Analysis'];

  protected readonly visible = computed(() => {
    const f = this.filter();
    if (f === 'All') return this.all;
    return this.all.filter((p) => p.category === f);
  });

  setFilter(f: Filter) {
    this.filter.set(f);
  }

  // EDITED: Stub for future detail view / modal
  viewDetails(project: Project): void {
    // TODO: open modal or navigate to detail view
    console.log('View details for:', project.title);
  }
}

