export type SkillGroup = {
  title: string;
  items: { name: string }[];
};

export type ProjectCategory = 'Frontend' | 'Data Analysis' | 'Mix';

export type Project = {
  name: string;
  description: string;
  tech: string[];
  category: ProjectCategory;
  imageAlt: string;
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
};

export const PROFILE = {
  name: 'Magdy Sayed',
  email: 'ms6774847@gmail.com',
  github: 'https://github.com/magdysayed',
  linkedin: 'https://www.linkedin.com/in/magdy-elsayed-6b5555382',
  roleTyping: 'Data Analyst | Frontend Developer | Programming Instructor',
} as const;

export const ABOUT_TEXT =
  'A passionate and versatile tech professional with a strong foundation in Frontend Development, Data Analysis, and Programming Education. With 3+ years of experience as a Programming Instructor and hands-on experience in Arduino Development, I bring a unique blend of technical skills and teaching expertise. I hold a degree in Electrical Engineering (Computer & Control) from Kafrelsheikh University. I am currently seeking opportunities in Data Analysis, Frontend Development, or Programming Instruction.';

export const QUICK_STATS = [
  { icon: '🏆', label: 'Years Experience', value: '3+', to: 3, suffix: '+' },
  { icon: '💼', label: 'Projects', value: '8+', to: 8, suffix: '+' },
  { icon: '👨‍🏫', label: 'Students Taught', value: '300+', to: 300, suffix: '+' },
  { icon: '🏅', label: 'Competition Awards', value: 'Multiple', to: null, suffix: '' },
] as const;

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Frontend Development',
    items: [
      { name: 'HTML5' },
      { name: 'CSS3 / SCSS' },
      { name: 'JavaScript' },
      { name: 'ES6+' },
      { name: 'TypeScript' },
      { name: 'Angular' },
    ],
  },
  {
    title: 'Data Analysis',
    items: [
      { name: 'SQL' },
      { name: 'Excel (Data Analysis)' },
      { name: 'Power BI (Learning)' },
      { name: 'Python (Learning)' },
    ],
  },
  {
    title: 'Programming & Robotics',
    items: [
      { name: 'Arduino' },
      { name: 'App Inventor' },
      { name: 'Scratch' },
      { name: 'WeDo' },
      { name: 'Spike' },
      { name: 'EV3' },
    ],
  },
  {
    title: 'Soft Skills',
    items: [
      { name: 'Teaching & Mentoring' },
      { name: 'Team Leadership' },
      { name: 'Problem Solving' },
      { name: 'Communication' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    name: 'Task Management Dashboard',
    description:
      'A feature-rich task management dashboard with drag & drop functionality, filters, and status tracking.',
    tech: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
    category: 'Frontend',
    imageAlt: 'Task management dashboard preview',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=60',
    githubUrl: 'https://github.com/magdysayed',
  },
  {
    name: 'E-Commerce Product Page',
    description:
      'A dynamic product listing page with advanced filtering, search functionality, and shopping cart.',
    tech: ['HTML', 'CSS', 'JavaScript', 'ES6+'],
    category: 'Frontend',
    imageAlt: 'E-commerce product listing preview',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=60',
    githubUrl: 'https://github.com/magdysayed',
  },
  {
    name: 'Weather App',
    description: 'A beautiful weather application that fetches real-time data from an API with stunning visuals.',
    tech: ['HTML', 'CSS', 'JavaScript', 'API Integration'],
    category: 'Frontend',
    imageAlt: 'Weather app preview',
    imageUrl: 'https://images.unsplash.com/photo-1561484930-998b6a7b22b4?auto=format&fit=crop&w=1600&q=60',
    githubUrl: 'https://github.com/magdysayed',
  },
  {
    name: 'Sales Dashboard',
    description: 'An interactive sales analytics dashboard with dynamic charts and filters.',
    tech: ['Excel', 'SQL', 'Power BI'],
    category: 'Data Analysis',
    imageAlt: 'Sales dashboard analytics preview',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=60',
  },
  {
    name: 'HR Analytics Report',
    description: 'Comprehensive HR analysis covering employee turnover, performance metrics, and workforce insights.',
    tech: ['SQL', 'Excel', 'Power BI'],
    category: 'Data Analysis',
    imageAlt: 'HR analytics report preview',
    imageUrl: 'https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=1600&q=60',
  },
  {
    name: 'Customer Segmentation',
    description: 'Customer segmentation based on purchasing behavior and demographics.',
    tech: ['Python', 'SQL', 'Excel'],
    category: 'Data Analysis',
    imageAlt: 'Customer segmentation charts preview',
    imageUrl: 'https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=1600&q=60',
  },
  {
    name: 'Interactive Data Visualization Website',
    description: 'Web-based interactive data visualization with dynamic charts and real-time rendering.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Chart.js'],
    category: 'Mix',
    imageAlt: 'Interactive data visualization preview',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=60',
  },
  {
    name: 'Student Performance Tracker',
    description: 'A student performance tracking system combining education expertise with data analysis.',
    tech: ['HTML', 'CSS', 'JavaScript', 'SQL'],
    category: 'Mix',
    imageAlt: 'Student performance tracker preview',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=60',
  },
];

