export interface NavItem {
  label: string;
  href: string;
}

export interface Fact {
  label: string;
  value: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  features: string[];
  github?: string;
  demo?: string;
}

export interface SkillGroup {
  title: string;
  icon: 'code' | 'brain' | 'server' | 'layout' | 'database' | 'cloud' | 'test';
  skills: string[];
}

export interface Certification {
  name: string;
  issuer?: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  detail: string;
}
