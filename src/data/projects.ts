export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "CloudNotes",
    description: "A cloud-native notes application with real-time sync, deployed on AWS with auto-scaling capabilities and S3 storage integration.",
    techStack: ["Python", "FastAPI", "AWS", "Docker", "PostgreSQL"],
    githubUrl: "https://github.com/arxyanf",
  },
  {
    id: 2,
    title: "Typing Speed Test",
    description: "Interactive web application to measure typing speed and accuracy with real-time feedback, leaderboards, and progress tracking.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Flask", "SQLite"],
    githubUrl: "https://github.com/arxyanf",
  },
  {
    id: 3,
    title: "Expense Tracker",
    description: "A full-stack expense tracking application that allows users to add, manage, and analyze daily expenses with a clean and intuitive interface.",
    techStack: ["React", "HTML", "CSS", "JavaScript", "Flask", "PostgreSQL"],
    githubUrl: "https://github.com/arxyanf/Expense-Tracker",
  },
];
