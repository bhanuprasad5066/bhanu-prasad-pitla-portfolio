import type {
  Certification,
  EducationItem,
  ExperienceItem,
  Fact,
  NavItem,
  Project,
  SkillGroup,
} from '@/types';

export const profile = {
  initials: 'BP',
  name: 'Bhanu Prasad Pitla',
  firstName: 'Bhanu',
  roles: ['AI Engineer', 'Software Engineer', 'Python Developer'],
  intro: [
    "I'm an AI and Software Engineer passionate about building intelligent applications, scalable backend systems, and modern full-stack solutions.",
    'I specialize in Python, Django, FastAPI, React, Machine Learning, Generative AI, and Cloud Technologies.',
    'I enjoy transforming innovative ideas into practical software solutions.',
  ],
  // Public assets are served from the site root.
  photo: `${import.meta.env.BASE_URL}profile..jpeg`,
  email: 'bhanubhanu62818@gmail.com',
  github: 'https://github.com/bhanuprasad5066',
  linkedin: 'https://www.linkedin.com/in/bhanu-prasad-506b566p/',
  resumePath: `${import.meta.env.BASE_URL}resume.pdf`,
  copyrightYear: 2026,
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const aboutParagraphs = [
  "I'm a 2025 B.Tech graduate in Information Technology from BV Raju Institute of Technology (BVRIT), Hyderabad.",
  'I am passionate about Artificial Intelligence, Full-Stack Development, Backend Engineering, Machine Learning, and Cloud Technologies.',
  'I have hands-on experience developing AI-powered applications, REST APIs, document processing systems, and real-time computer vision applications.',
  'I completed a Software Development and AR/VR internship at IIT Hyderabad and worked as a QA Analyst at WPP Production India Private Limited.',
];

export const aboutFacts: Fact[] = [
  { label: 'Location', value: 'Hyderabad, Telangana, India' },
  { label: 'Degree', value: 'B.Tech Information Technology' },
  { label: 'Graduation', value: '2025' },
  { label: 'Primary Language', value: 'Python' },
  { label: 'Professional Interests', value: 'AI Engineering and Software Development' },
];

export const experience: ExperienceItem[] = [
  {
    role: 'QA Analyst (Contract)',
    company: 'WPP Production India Private Limited',
    period: 'August 2026 – October 2026',
    responsibilities: [
      'Performed manual UI/UX testing of web applications.',
      'Tested layouts, navigation, and user workflows.',
      'Identified and documented defects using JIRA.',
      'Performed regression testing and retested fixes.',
      'Participated in sprint reviews.',
    ],
  },
  {
    role: 'Software Development & AR/VR Intern',
    company: 'IIT Hyderabad (PMKVY–NSDC)',
    period: 'March 2026 – May 2026',
    responsibilities: [
      'Developed real-time gesture recognition using OpenCV and MediaPipe.',
      'Trained multi-class PyTorch models.',
      'Developed FastAPI endpoints for ML predictions.',
      'Integrated machine learning inference with Unity3D.',
      'Deployed applications on Meta AR/VR smart glasses.',
      'Performed functional, integration, system, and performance testing.',
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'Mini GPT',
    subtitle: 'AI Chat Application with RAG',
    description:
      'Developed a full-stack AI chat application with streaming assistant responses using Server-Sent Events.',
    technologies: [
      'React',
      'Vite',
      'Django REST Framework',
      'PostgreSQL',
      'pgvector',
      'Redis',
      'Celery',
      'Docker Compose',
    ],
    features: [
      'PDF, DOCX, and TXT document processing.',
      'Text chunking and vector embeddings.',
      'Semantic similarity search using PostgreSQL pgvector.',
      'Redis and Celery background processing.',
      'Secure authentication and CSRF protection.',
      'Docker Compose deployment.',
    ],
    github: 'https://github.com/bhanuprasad5066',
  },
  {
    title: 'VetLens',
    subtitle: 'AI-Powered Pet Diagnosis Platform',
    description:
      'Developed an AI-powered pet diagnosis and teleconsultation platform combining computer vision and natural language processing.',
    technologies: [
      'Django REST Framework',
      'React',
      'MySQL',
      'Celery',
      'Redis',
      'PyTorch',
      'spaCy',
      'JWT',
    ],
    features: [
      'Pet image analysis using CNN models.',
      'Symptom analysis using NLP.',
      'Combined diagnostic predictions.',
      'Role-based authentication.',
      'Veterinarian and pet-owner dashboards.',
      'Background task processing.',
    ],
    github: 'https://github.com/bhanuprasad5066',
  },
  {
    title: 'SignAR',
    subtitle: 'AI & AR Sign Language Avatar System',
    description:
      'Developed an AI-powered sign language recognition system integrated with an animated 3D avatar.',
    technologies: [
      'Python',
      'FastAPI',
      'PyTorch',
      'OpenCV',
      'MediaPipe',
      'Unity3D',
      'Meta Smart Glasses SDK',
    ],
    features: [
      'Real-time hand landmark detection.',
      'Gesture classification using PyTorch.',
      'FastAPI-based prediction services.',
      'Unity3D avatar integration.',
      'Meta AR/VR smart glasses deployment.',
      'Performance and latency optimization.',
    ],
    github: 'https://github.com/bhanuprasad5066',
  },
];

export const skillGroups: SkillGroup[] = [
  { title: 'Programming', icon: 'code', skills: ['Python', 'SQL', 'JavaScript'] },
  {
    title: 'AI / Machine Learning',
    icon: 'brain',
    skills: ['Generative AI', 'RAG', 'Vector Embeddings', 'PyTorch', 'OpenCV', 'MediaPipe', 'spaCy'],
  },
  {
    title: 'Backend',
    icon: 'server',
    skills: ['Django', 'Django REST Framework', 'FastAPI', 'REST APIs'],
  },
  {
    title: 'Frontend',
    icon: 'layout',
    skills: ['React.js', 'Vite', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    title: 'Databases',
    icon: 'database',
    skills: ['PostgreSQL', 'pgvector', 'MySQL', 'Redis'],
  },
  {
    title: 'Cloud & DevOps',
    icon: 'cloud',
    skills: ['AWS', 'Docker', 'Docker Compose', 'Git', 'GitHub', 'GitHub Actions', 'Jenkins', 'Linux'],
  },
  {
    title: 'Testing',
    icon: 'test',
    skills: ['Manual Testing', 'Functional Testing', 'Regression Testing', 'UI/UX Testing', 'JIRA'],
  },
];

export const certifications: Certification[] = [
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services' },
  { name: 'AWS Academy Graduate – Cloud Operations' },
  { name: 'AWS Academy Graduate – Machine Learning Foundations' },
  {
    name: 'PMKVY Internship Certification – Software Development & AR/VR Systems',
    issuer: 'IIT Hyderabad',
  },
  { name: 'Full-Stack Web Development', issuer: 'Udemy' },
  { name: 'Swecha AI Internship Program' },
];

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Information Technology',
    institution: 'BV Raju Institute of Technology (BVRIT), Hyderabad',
    period: '2021 – 2025',
    detail: 'CGPA: 7.1 / 10.0',
  },
];
