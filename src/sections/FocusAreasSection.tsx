import { motion } from "framer-motion";
import { useState, useRef } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { Code, Cloud, Cpu, Zap } from "lucide-react";

interface FocusArea {
    id: number;
    title: string;
    icon: typeof Code;
    description: string;
    skills: string[];
    gradient: string;
}

const focusAreas: FocusArea[] = [
    {
        id: 1,
        title: "Full Stack Development",
        icon: Code,
        description: "Building end-to-end web applications with React frontends and Python backends, implementing responsive interfaces and robust APIs.",
        skills: ["React", "JavaScript", "Python", "Flask", "FastAPI", "PostgreSQL"],
        gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
        id: 2,
        title: "Cloud & DevOps Engineering",
        icon: Cloud,
        description: "Designing and deploying scalable AWS infrastructure with containerization and infrastructure-as-code principles.",
        skills: ["AWS", "Docker", "Terraform", "Linux", "Nginx"],
        gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
        id: 3,
        title: "Automation & CI/CD",
        icon: Zap,
        description: "Building automated deployment pipelines and continuous integration workflows to streamline development cycles.",
        skills: ["GitHub Actions", "Jenkins", "Bash", "Git"],
        gradient: "from-orange-500/20 to-red-500/20",
    },
    {
        id: 4,
        title: "Scalable System Design",
        icon: Cpu,
        description: "Architecting reliable, fault-tolerant systems with focus on high availability, scalability, and security.",
        skills: ["System Architecture", "AWS Services", "CloudWatch", "PostgreSQL"],
        gradient: "from-green-500/20 to-emerald-500/20",
    },
];

interface FocusCardProps {
    area: FocusArea;
    index: number;
}

const FocusCard = ({ area, index }: FocusCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateXValue = ((y - centerY) / centerY) * -10;
        const rotateYValue = ((x - centerX) / centerX) * 10;

        setRotateX(rotateXValue);
        setRotateY(rotateYValue);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    const Icon = area.icon;

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transition: "transform 0.1s ease-out",
            }}
            className="group relative bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-colors duration-300"
        >
            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />

            {/* Depth shadow layer */}
            <div className="absolute inset-0 rounded-2xl shadow-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                style={{
                    transform: `translateZ(-20px)`,
                }}
            />

            {/* Content */}
            <div className="relative z-10">
                {/* Icon */}
                <motion.div
                    style={{
                        transform: `translateZ(20px)`,
                    }}
                    className="mb-4"
                >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-primary" />
                    </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {area.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {area.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                    {area.skills.map((skill) => (
                        <span
                            key={skill}
                            className="px-2.5 py-1 text-xs font-medium bg-secondary/50 text-secondary-foreground rounded-md border border-border group-hover:border-primary/30 transition-colors"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Shine effect on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                    background: `linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.05) 50%, transparent 60%)`,
                }}
            />
        </motion.div>
    );
};

const FocusAreasSection = () => {
    return (
        <SectionWrapper id="focus-areas">
            <SectionTitle
                title="Focus Areas"
                subtitle="Core competencies and areas of expertise"
            />

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {focusAreas.map((area, index) => (
                    <FocusCard key={area.id} area={area} index={index} />
                ))}
            </div>
        </SectionWrapper>
    );
};

export default FocusAreasSection;
