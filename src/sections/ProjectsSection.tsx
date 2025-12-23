import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects">
      <SectionTitle
        title="Featured Projects"
        subtitle="A selection of projects showcasing my DevOps and development skills"
      />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
