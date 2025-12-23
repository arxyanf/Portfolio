import { motion } from "framer-motion";
import { Cloud, Container, Server, Wrench } from "lucide-react";
import { SkillCategory } from "@/data/skills";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cloud,
  Container,
  Server,
  Wrench,
};

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

const SkillCard = ({ category, index }: SkillCardProps) => {
  const IconComponent = iconMap[category.icon] || Cloud;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
          <IconComponent className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">{category.name}</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 text-sm bg-secondary/30 text-muted-foreground rounded-lg border border-border hover:border-primary/30 hover:text-foreground transition-all duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
