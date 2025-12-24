import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";

const AboutSection = () => {
  return (
    <SectionWrapper id="about">
      <SectionTitle
        title="About Me"
        subtitle="Passionate about building robust cloud infrastructure"
      />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card border border-border rounded-2xl p-6 md:p-10"
        >
          <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
            <p>
              I am a <span className="text-foreground font-medium">Full Stack & Cloud Developer</span> dedicated to building high-performance applications and the scalable infrastructure that powers them. My journey began with a deep dive into Linux systems and has evolved into a comprehensive expertise in developing full-stack solutions within the modern cloud ecosystem.
            </p>

            <p>
              With hands-on experience in <span className="text-primary">frontend and backend development</span> alongside mastery of AWS, Docker, and CI/CD, I bridge the gap between code and production. I specialize in creating seamless user experiences backed by <span className="text-foreground font-medium">infrastructure-as-code principles</span>, ensuring that every application I build is as maintainable as it is functional. Whether I'm crafting an API or optimizing a deployment pipeline, I focus on turning complex technical requirements into elegant, end-to-end solutions.
            </p>
          </div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-8 border-t border-border"
          >
            {[
              { value: "Fresher", label: "Ready to Contribute" },
              { value: "10+", label: "Projects Completed" },
              { value: "5+", label: "AWS Services" },
              { value: "100%", label: "Uptime Focus" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
