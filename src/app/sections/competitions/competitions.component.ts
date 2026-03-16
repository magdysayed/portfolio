import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Achievement = {
  title: string;
  role: string;
  description: string;
};

@Component({
  selector: 'app-competitions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './competitions.component.html',
  styleUrl: './competitions.component.scss',
})
export class CompetitionsComponent {
  protected readonly items: Achievement[] = [
    {
      title: 'First Lego League (FLL)',
      role: 'Team Coach',
      description:
        'Coached students through the full robotics journey: strategy, design, programming, and presentation. Built strong teamwork habits and competition-ready discipline.',
    },
    {
      title: 'RoboFest',
      role: 'Team Coach',
      description:
        'Guided teams to solve complex challenges under time pressure, focusing on robust engineering, clear logic, and iterative testing.',
    },
    {
      title: 'MakeX',
      role: 'Team Coach',
      description:
        'Prepared students for real-world problem solving using sensors, mechanisms, and mission-based robotics with structured practice plans.',
    },
    {
      title: 'Afro Asian Competition',
      role: 'Team Coach',
      description:
        'Supported teams in high-level competitive environments, strengthening performance under stress, communication, and consistent delivery.',
    },
  ];
}

