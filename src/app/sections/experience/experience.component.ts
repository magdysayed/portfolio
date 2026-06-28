import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  duration: string;
  bullets: string[];
  tag?: string;
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
      id: 'ai-automation',
      role: 'Freelance AI Automation Engineer',
      company: 'Remote (Upwork, Mostaqel)',
      duration: 'Jun 2025 - Present',
      bullets: [
        'Architected production-ready workflow automation systems using n8n for trade, e-commerce, and educational industries.',
        'Integrated LLMs (OpenAI APIs) with vector embeddings and vector databases (Supabase) to build corporate RAG systems.',
        'Designed and maintained backend webhooks and complex REST API integrations connecting Telegram/WhatsApp with central data layers.',
        'Optimized automated data pipelines, reducing client manual operations and response times by up to 80%.',
      ],
    },
    {
      id: 'instructors-head',
      role: 'Instructors Head & Learning Experience Manager',
      company: 'Techno Kids - Techno Future Academy',
      duration: '2025 - 2026',
      bullets: [
        'Led and managed a team of programming instructors, implementing evaluation frameworks and tracking KPIs.',
        'Designed and refined curriculum pathways for advanced tracks: Python, Data Structures, Algorithms, and Robotics (Arduino, EV3, Spike Prime).',
      ],
    },
    {
      id: 'eyouth-deci',
      role: 'Technical Instructor & Curriculum Designer',
      company: 'E-Youth (DECI Initiative)',
      duration: 'Mar 2026 - Jul 2026',
      tag: 'Teaching',
      bullets: [
        'Mentored gifted students in advanced programming, data science, and algorithmic problem-solving under Egypt\'s Digital Egypt Cubs Initiative.',
      ],
    },
    {
      id: 'data-analyst',
      role: 'Freelance Data Analyst',
      company: 'Remote (Upwork, Mostaqel)',
      duration: 'Jun 2024 - Present',
      bullets: [
        'Designed and maintained end-to-end ETL pipelines using Python and SQL Server, ensuring 95%+ data integrity.',
        'Developed interactive multi-page Power BI dashboards utilizing advanced DAX measures and Power Query.',
        'Optimized complex T-SQL queries and indexing, reducing database retrieval times by 40%.',
        'Built predictive machine learning models (Random Forest, XGBoost) with 94%+ accuracy.',
      ],
    },
    {
      id: 'programming-instructor',
      role: 'Programming Instructor',
      company: 'Techno Kids - Techno Future Academy',
      duration: 'Jan 2020 - Oct 2024',
      tag: 'Teaching',
      bullets: [
        'Taught kids programming including WeDo, Spike, EV3, Scratch, Arduino, HTML, CSS, and JavaScript.',
        'Coached teams in multiple international robotics competitions and mentored 300+ students.',
      ],
    },
  ];
}
