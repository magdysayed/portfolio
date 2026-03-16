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
  private readonly all: Project[] = PROJECTS;

  protected readonly filter = signal<Filter>('All');
  protected readonly filters: Filter[] = ['All', 'Frontend', 'Data Analysis', 'Mix'];

  protected readonly visible = computed(() => {
    const f = this.filter();
    if (f === 'All') return this.all;
    return this.all.filter((p) => p.category === f);
  });

  setFilter(f: Filter) {
    this.filter.set(f);
  }
}

