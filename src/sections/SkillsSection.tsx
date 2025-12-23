import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import SkillCard from "@/components/SkillCard";
import { skillCategories } from "@/data/skills";

const SkillsSection = () => {
  return (
    <SectionWrapper id="skills" className="bg-card/30">
      <SectionTitle
        title="Technical Skills"
        subtitle="Technologies and tools I work with on a daily basis"
      />
      
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {skillCategories.map((category, index) => (
          <SkillCard key={category.name} category={category} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
