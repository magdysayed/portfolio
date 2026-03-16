import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type ExperienceItem = {
  role: string;
  company: string;
  duration: string;
  bullets: string[];
};

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  protected readonly items: ExperienceItem[] = [
    {
      role: 'Programming Instructor',
      company: 'Techno Kids - Techno Future Academy',
      duration: '3+ Years',
      bullets: [
        'Taught kids programming including WeDo, Spike, EV3, Scratch, Arduino, HTML, CSS, JavaScript.',
        'Coached teams in multiple international robotics competitions.',
        'Mentored 50+ students with structured learning paths and hands-on projects.',
      ],
    },
    {
      role: 'Freelance Arduino Developer',
      company: 'Self-Employed',
      duration: 'Freelance',
      bullets: [
        'Developed large-scale educational boards using Arduino.',
        'Built mobile applications using App Inventor for board control.',
        'Delivered custom hardware-software solutions for clients.',
      ],
    },
  ];
}

