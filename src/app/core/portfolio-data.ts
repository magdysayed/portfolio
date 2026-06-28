export type SkillGroup = {
  title: string;
  items: { name: string }[];
};

export type ProjectCategory = 'AI Automation' | 'Data Analysis';

export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  category: ProjectCategory;
  imageUrl: string;
  githubUrl?: string;
  status?: 'Coming Soon';
};

export const PROFILE = {
  name: 'Magdy Sayed',
  email: 'ms6774847@gmail.com',
  github: 'https://github.com/magdysayed',
  linkedin: 'https://www.linkedin.com/in/magdy-elsayed-6b5555382',
  roleTyping: 'AI Automation Engineer | Data Analyst | STEM Lead',
} as const;

export const ABOUT_TEXT =
  'I bridge the gap between AI Workflows (n8n, RAG, LLMs), Advanced Data Analytics (SQL, Power BI, Python), and Technical STEM Leadership. As a Freelance AI Automation Engineer and Data Analyst, I architect production-ready automations, ETL pipelines, and interactive dashboards. As Instructors Head at Techno Kids and a Technical Instructor with E-Youth (DECI Initiative), I lead curriculum design and mentor students in programming, data science, and robotics. I hold a degree in Electrical Engineering (Computer & Control) from Kafrelsheikh University — Class of 2024, and I am open to remote opportunities across AI automation, analytics, and STEM education.';

export const QUICK_STATS = [
  { icon: '🏆', label: 'Years Experience', value: '3+', to: 3, suffix: '+' },
  { icon: '💼', label: 'Projects', value: '8+', to: 8, suffix: '+' },
  { icon: '👨‍🏫', label: 'Students Taught', value: '300+', to: 300, suffix: '+' },
  { icon: '🏅', label: 'Competition Awards', value: 'Multiple', to: null, suffix: '' },
] as const;

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'AI & Automation',
    items: [
      { name: 'n8n' },
      { name: 'OpenAI API' },
      { name: 'RAG Architecture' },
      { name: 'Vector Embeddings' },
      { name: 'Supabase' },
      { name: 'REST APIs' },
      { name: 'Webhooks' },
    ],
  },
  {
    title: 'Data Science & Analytics',
    items: [
      { name: 'Python (Pandas, NumPy, PySpark)' },
      { name: 'SQL Server' },
      { name: 'T-SQL' },
      { name: 'Power BI (DAX, Power Query)' },
      { name: 'ETL Pipelines' },
      { name: 'Query Optimization' },
    ],
  },
  {
    title: 'STEM & Leadership',
    items: [
      { name: 'Team Leadership' },
      { name: 'Curriculum Engineering' },
      { name: 'Instructional QA' },
      { name: 'Staff KPI Tracking' },
      { name: 'Arduino' },
      { name: 'EV3' },
      { name: 'Spike Prime' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'olive-hub',
    title: 'Olive Hub: B2B Trade Automation System',
    description:
      'Designed and engineered an integrated B2B commodity trading automation workflow, connecting messaging platforms directly to Supabase, eliminating manual data entry.',
    techStack: ['n8n', 'Supabase', 'PostgreSQL', 'REST APIs'],
    category: 'AI Automation',
    imageUrl: 'assets/images/projects/olive-hub.png',
  },
  {
    id: 'abu-al-amjad',
    title: 'AI Restaurant Operations & Order Management (Abu Al-Amjad)',
    description:
      'Automated full order lifecycle management via Telegram bot, incorporating a RAG-powered AI assistant for complex, intelligent menu queries.',
    techStack: ['n8n', 'OpenAI', 'Supabase', 'RAG', 'Telegram API'],
    category: 'AI Automation',
    imageUrl: 'assets/images/projects/abu-al-amjad.png',
  },
  {
    id: 'youtube-analytics',
    title: 'YouTube Analytics Dashboard',
    description:
      'Built ETL pipeline processing 97B+ views. Delivered a 4-page Power BI dashboard with advanced DAX measures revealing content performance patterns (Digital Minds Egypt).',
    techStack: ['Python', 'SQL Server', 'Power BI', 'DAX'],
    category: 'Data Analysis',
    imageUrl: 'assets/images/projects/youtube-analytics.png',
    githubUrl: 'https://github.com/magdysayed/Youtube-Trending-Analysis-End-to-End',
  },
  {
    id: 'fpl-analytics',
    title: 'Fantasy Premier League Analytics Platform',
    description:
      'Automated data pipeline ingesting live gameweek data via REST API. Built player scoring model supporting 500+ clients in squad optimization (SportTech Innovations).',
    techStack: ['Python', 'Pandas', 'REST API', 'Statistical Modeling', 'Streamlit'],
    category: 'Data Analysis',
    imageUrl: 'assets/images/projects/fpl-analytics.png',
  },
  {
    id: 'telco-churn',
    title: 'Telco Churn Intelligence',
    description:
      'Developed a comprehensive churn prediction and business intelligence analysis system focused on corporate customer retention strategies.',
    techStack: ['Python', 'SQL', 'DAX', 'Power BI'],
    category: 'Data Analysis',
    imageUrl: 'assets/images/projects/telco-churn.png',
  },
  {
    id: 'sports-analytics',
    title: 'Sports Analytics & Performance Tool',
    description:
      'Engineered a specialized sports analytics data system to model and visualize athletic performance metrics and statistical outcomes.',
    techStack: ['Python', 'Data Visualization', 'Advanced Analytics'],
    category: 'Data Analysis',
    imageUrl: 'assets/images/projects/sports-analytics.png',
  },
];

/* NEW — Gallery data model and sample images */
export type GalleryCategory = 'competitions' | 'classes' | 'deci' | 'arduino';

export interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: GalleryCategory;
  description?: string;
}

/* NEW — Simple image path array for the carousel */
export const GALLERY_IMAGE_PATHS: string[] = [
  'assets/gallery/WhatsApp Image 2026-04-25 at 2.26.08 AM.jpeg',
  'assets/gallery/WhatsApp Image 2026-04-25 at 2.26.09 AM.jpeg',
  'assets/gallery/WhatsApp Image 2026-04-25 at 2.26.19 AM.jpeg',
  'assets/gallery/WhatsApp Image 2026-04-25 at 2.26.21 AM.jpeg',
  'assets/gallery/WhatsApp Image 2026-04-25 at 2.26.36 AM.jpeg',
  'assets/gallery/WhatsApp Image 2026-04-25 at 2.26.37 AM.jpeg',
  'assets/gallery/WhatsApp Image 2026-04-25 at 2.26.41 AM.jpeg',
  'assets/gallery/WhatsApp Image 2026-04-25 at 2.26.46 AM.jpeg',
  'assets/gallery/WhatsApp Image 2026-04-25 at 2.26.47 AM.jpeg',
  'assets/gallery/WhatsApp Image 2026-04-1at 2.26.47 AM.jpeg',
  'assets/gallery/WhatsApp Image 2026-04-30at 2.26.47 AM.jpeg',
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: 'assets/gallery/WhatsApp Image 2026-04-25 at 2.26.08 AM.jpeg',
    title: 'FLL Competition Prep',
    category: 'competitions',
    description: 'Coaching students for First Lego League robotics challenges.',
  },
  {
    id: 2,
    src: 'assets/gallery/WhatsApp Image 2026-04-25 at 2.26.09 AM.jpeg',
    title: 'Scratch Coding Class',
    category: 'classes',
    description: 'Teaching kids game development and logic with Scratch.',
  },
  {
    id: 3,
    src: 'assets/gallery/WhatsApp Image 2026-04-25 at 2.26.19 AM.jpeg',
    title: 'DECI Project Session',
    category: 'deci',
    description: 'Remote teaching session with eYouth DECI project students.',
  },
  {
    id: 4,
    src: 'assets/gallery/WhatsApp Image 2026-04-25 at 2.26.21 AM.jpeg',
    title: 'Arduino Workshop',
    category: 'arduino',
    description: 'Hands-on hardware programming workshop for young makers.',
  },
  {
    id: 5,
    src: 'assets/gallery/WhatsApp Image 2026-04-25 at 2.26.36 AM.jpeg',
    title: 'Team Strategy Session',
    category: 'competitions',
    description: 'Preparing the team strategy before a robotics competition.',
  },
  {
    id: 6,
    src: 'assets/gallery/WhatsApp Image 2026-04-25 at 2.26.37 AM.jpeg',
    title: 'Classroom Highlights',
    category: 'classes',
    description: 'A vibrant moment during a live coding lesson.',
  },
  {
    id: 7,
    src: 'assets/gallery/WhatsApp Image 2026-04-25 at 2.26.41 AM.jpeg',
    title: 'DECI Online Mentoring',
    category: 'deci',
    description: 'One-on-one mentoring through the DECI online platform.',
  },
  {
    id: 8,
    src: 'assets/gallery/WhatsApp Image 2026-04-25 at 2.26.46 AM.jpeg',
    title: 'Circuit Building',
    category: 'arduino',
    description: 'Students building and testing their first Arduino circuits.',
  },
  {
    id: 9,
    src: 'assets/gallery/WhatsApp Image 2026-04-25 at 2.26.47 AM.jpeg',
    title: 'Award Ceremony',
    category: 'competitions',
    description: 'Celebrating student achievements at a robotics event.',
  },
  {
    id: 10,
    src: 'assets/gallery/WhatsApp Image 2026-04-1at 2.26.47 AM.jpeg',
    title: 'Creative Coding',
    category: 'classes',
    description: 'Kids exploring creative projects with block-based coding.',
  },
  {
    id: 11,
    src: 'assets/gallery/WhatsApp Image 2026-04-30at 2.26.47 AM.jpeg',
    title: 'Workshop Wrap-up',
    category: 'arduino',
    description: 'Showcasing final projects at the end of an Arduino workshop.',
  },
];

