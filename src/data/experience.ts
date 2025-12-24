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
    title: "Full Stack Developer Intern",
    organization: "Ice Hut Technologies",
    duration: "Nov 2024 – Present",
    description: [
      "Developed and maintained cloud-based applications",
      "Assisted in designing scalable infrastructure",
      "Worked with Docker-based deployments",
      "Collaborated with senior engineers to improve system reliability",
    ],
    technologies: ["Python", "Flask", "AWS", "Docker", "PostgreSQL", "React"],
  },
  {
    id: 2,
    type: 'experience',
    title: "Python Developer Intern",
    organization: "Yatharth Educational Services",
    duration: "Jun 2024 – Aug 2024",
    description: [
      "Built REST APIs using Python and FastAPI",
      "Optimized file-based and CLI operations",
      "Implemented encryption, IAM roles, and access control",
    ],
    technologies: ["Python", "FastAPI", "Linux", "Security"],
  },
  {
    id: 3,
    type: 'education',
    title: "B.Tech – Computer Science (Cloud & Fullstack)",
    organization: "Poornima University",
    duration: "2022 – 2026",
    description: [
      "Specialized in Cloud Computing and Full Stack Development",
      "Relevant coursework: Data Structures, Algorithms, Cloud Architecture",
      "Active participant in tech clubs and hackathons",
    ],
  },
  {
    id: 4,
    type: 'education',
    title: "Senior Secondary (PCM)",
    organization: "Gyan Vihar School",
    duration: "2021 – 2022",
  },
];
