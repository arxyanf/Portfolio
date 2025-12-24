export interface TimelineItem {
  id: number;
  type: 'experience' | 'education';
  title: string;
  organization: string;
  duration: string;
  description?: string[];
  technologies?: string[];
}

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    type: 'experience',
    title: "Full Stack Development",
    organization: "Focus Area",
    duration: "Core Competency",
    description: [
      "Building end-to-end web applications with React frontends",
      "Developing REST APIs using Python (Flask/FastAPI)",
      "Implementing responsive, user-friendly interfaces",
      "Managing databases and data persistence layers",
    ],
    technologies: ["React", "HTML", "CSS", "JavaScript", "Python", "Flask", "FastAPI", "PostgreSQL"],
  },
  {
    id: 2,
    type: 'experience',
    title: "Cloud & DevOps Engineering",
    organization: "Focus Area",
    duration: "Core Competency",
    description: [
      "Designing and deploying scalable AWS infrastructure",
      "Containerizing applications with Docker",
      "Implementing infrastructure as code principles",
      "Optimizing cloud resource usage and cost efficiency",
    ],
    technologies: ["AWS", "Docker", "Terraform", "Linux", "Nginx"],
  },
  {
    id: 3,
    type: 'experience',
    title: "Automation & CI/CD",
    organization: "Focus Area",
    duration: "Core Competency",
    description: [
      "Building automated deployment pipelines",
      "Implementing continuous integration workflows",
      "Automating testing and quality assurance processes",
      "Streamlining development and release cycles",
    ],
    technologies: ["GitHub Actions", "Jenkins", "Bash", "Git"],
  },
  {
    id: 4,
    type: 'experience',
    title: "Scalable System Design",
    organization: "Focus Area",
    duration: "Core Competency",
    description: [
      "Architecting reliable, fault-tolerant systems",
      "Designing for high availability and scalability",
      "Implementing security best practices",
      "Ensuring system maintainability and monitoring",
    ],
    technologies: ["System Architecture", "AWS Services", "PostgreSQL", "CloudWatch"],
  },
  {
    id: 5,
    type: 'education',
    title: "B.Tech – Computer Science (Cloud & Fullstack)",
    organization: "Poornima University",
    duration: "2022 – 2026",
  },
  {
    id: 6,
    type: 'education',
    title: "Senior Secondary (PCM)",
    organization: "Gyan Vihar School",
    duration: "2021 – 2022",
  },
];
