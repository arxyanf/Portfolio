import { motion, useInView } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { useRef } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { timelineData, TimelineItem } from "@/data/experience";

interface TimelineNodeProps {
  isActive: boolean;
  type: 'experience' | 'education';
}

const TimelineNode = ({ isActive, type }: TimelineNodeProps) => {
  const Icon = type === 'experience' ? Briefcase : GraduationCap;

  return (
    <motion.div
      animate={{
        scale: isActive ? 1 : 0.9,
        opacity: isActive ? 1 : 0.5,
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative z-10"
    >
      {/* Subtle glow when active */}
      <motion.div
        animate={{
          opacity: isActive ? 0.4 : 0,
        }}
        transition={{ duration: 0.4 }}
        className="absolute -inset-1 rounded-full bg-primary/30 blur-md"
      />

      {/* Main node */}
      <div className={`relative w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${isActive
          ? 'bg-primary/20 border-primary/60'
          : 'bg-muted/30 border-border/50'
        }`}>
        <Icon className={`w-4 h-4 md:w-5 md:h-5 transition-colors duration-300 ${isActive ? 'text-primary' : 'text-muted-foreground'
          }`} />
      </div>
    </motion.div>
  );
};

interface TimelineCardProps {
  item: TimelineItem;
  index: number;
  totalItems: number;
}

const TimelineCard = ({ item, index, totalItems }: TimelineCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, {
    once: false,
    margin: "-15% 0px -15% 0px",
    amount: 0.4
  });

  const isExperience = item.type === 'experience';

  return (
    <div
      ref={cardRef}
      className="relative flex gap-4 md:gap-6 pb-12 last:pb-0"
    >
      {/* Timeline Rail */}
      <div className="relative flex flex-col items-center">
        {/* Node */}
        <TimelineNode isActive={isInView} type={item.type} />

        {/* Connector line */}
        {index < totalItems - 1 && (
          <div className="relative w-px flex-1 mt-3">
            {/* Background rail */}
            <div className="absolute inset-0 bg-border/40" />

            {/* Active indicator */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: isInView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="absolute inset-0 bg-primary/40 origin-top"
            />
          </div>
        )}
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={isInView
          ? { opacity: 1, x: 0 }
          : { opacity: 0.5, x: 10 }
        }
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex-1 min-w-0"
      >
        <div className={`relative rounded-xl overflow-hidden bg-card/60 border transition-all duration-300 ${isInView ? 'border-primary/30' : 'border-border/30'
          }`}>
          <div className="relative p-5 md:p-6">
            {/* Type badge and duration */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className={`px-2.5 py-1 text-xs font-medium rounded-md ${isExperience
                  ? 'bg-primary/10 text-primary'
                  : 'bg-muted/50 text-muted-foreground'
                }`}>
                {isExperience ? 'Experience' : 'Education'}
              </span>
              <span className="text-sm text-muted-foreground/70 font-mono">
                {item.duration}
              </span>
            </div>

            {/* Title and organization */}
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">
              {item.title}
            </h3>
            <p className="text-primary/80 font-medium mb-4">
              {item.organization}
            </p>

            {/* Description */}
            {item.description && (
              <ul className="space-y-2 mb-4">
                {item.description.map((desc, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0.6 }}
                    transition={{ delay: 0.05 * i, duration: 0.3 }}
                    className="text-muted-foreground flex gap-2 items-start text-sm"
                  >
                    <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-primary/50" />
                    <span>{desc}</span>
                  </motion.li>
                ))}
              </ul>
            )}

            {/* Tech badges */}
            {item.technologies && (
              <div className="flex flex-wrap gap-1.5">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-medium bg-muted/40 text-muted-foreground rounded-md border border-border/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <SectionWrapper id="experience" className="bg-card/20">
      <SectionTitle
        title="Focus Areas & Education"
        subtitle="Core competencies and academic background"
      />

      <div className="max-w-3xl mx-auto">
        {timelineData.map((item, index) => (
          <TimelineCard
            key={item.id}
            item={item}
            index={index}
            totalItems={timelineData.length}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;
