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
    id: 2,
    type: 'education',
    title: "Senior Secondary (PCM)",
    organization: "Gyan Vihar School",
    duration: "2021 – 2022",
  },
];
