export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Cloud",
    icon: "Cloud",
    skills: ["AWS EC2", "S3", "IAM", "VPC", "Lambda", "CloudWatch"],
  },
  {
    name: "DevOps",
    icon: "Container",
    skills: ["Docker", "CI/CD", "GitHub Actions", "Jenkins", "Terraform"],
  },
  {
    name: "Backend",
    icon: "Server",
    skills: ["Python", "Flask", "FastAPI", "REST APIs", "PostgreSQL"],
  },
  {
    name: "Tools",
    icon: "Wrench",
    skills: ["Linux", "Git", "Nginx", "Bash", "VS Code", "Vim"],
  },
];
