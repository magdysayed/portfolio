import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SKILL_GROUPS } from '../../core/portfolio-data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  protected readonly groups = SKILL_GROUPS;
}

