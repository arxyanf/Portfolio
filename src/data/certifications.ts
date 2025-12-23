export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl?: string;
  badge: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    name: "Python Fundamentals",
    issuer: "GitHub & Great Learning",
    date: "2024",
    verificationUrl: "https://www.mygreatlearning.com/certificate",
    badge: "🐍",
  },
  {
    id: 2,
    name: "Azure AI Essentials",
    issuer: "Microsoft",
    date: "2024",
    verificationUrl: "https://learn.microsoft.com/credentials",
    badge: "🤖",
  },
  {
    id: 3,
    name: "System Administration Essentials",
    issuer: "IT Operations & Administration",
    date: "2024",
    verificationUrl: "#",
    badge: "🖥️",
  },
];
