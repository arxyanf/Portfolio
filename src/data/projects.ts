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
    githubUrl: "https://github.com/aryanvaishnav",
    liveUrl: "https://cloudnotes.demo.com",
  },
  {
    id: 2,
    title: "DevOps CI/CD Pipeline",
    description: "End-to-end CI/CD pipeline using GitHub Actions, Docker containers, and automated deployment to AWS EC2 with zero-downtime releases.",
    techStack: ["GitHub Actions", "Docker", "AWS EC2", "Nginx", "Bash"],
    githubUrl: "https://github.com/aryanvaishnav",
  },
  {
    id: 3,
    title: "Typing Speed Test",
    description: "Interactive web application to measure typing speed and accuracy with real-time feedback, leaderboards, and progress tracking.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Flask", "SQLite"],
    githubUrl: "https://github.com/aryanvaishnav",
    liveUrl: "https://typingtest.demo.com",
  },
];
