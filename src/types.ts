export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  fullTitle: string;
  description: string;
  technologies: string[];
  workflow?: string[];
  features?: string[];
  image: string;
  category: 'Multi-Agent AI' | 'Fintech & AI' | 'AI & RAG' | 'Cybersecurity' | 'Workflow Automation' | 'Mobile App';
  status: string;
  note?: string;
  ethicalNote?: string;
  githubUrl?: string;
  demoUrl?: string;
  detailedOverview: string;
  problemAddressed: string;
  proposedSolution: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level?: string; tag?: string }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  category: 'Certification' | 'Course' | 'Job Simulation';
  badge: string;
  description: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  role: string;
  description: string;
  type: 'Hackathon' | 'Ideathon' | 'Paper Presentation' | 'Volunteering';
}
