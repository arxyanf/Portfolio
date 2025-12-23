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
              I'm a <span className="text-foreground font-medium">Cloud & DevOps Engineer</span> with a deep passion for building and maintaining scalable, reliable infrastructure. My journey in tech started with a fascination for Linux systems and has evolved into expertise across the modern DevOps ecosystem.
            </p>
            
            <p>
              With hands-on experience in <span className="text-primary">AWS cloud services</span>, containerization with Docker, and CI/CD automation, I help teams ship code faster and more reliably. I believe in the philosophy of <span className="text-foreground font-medium">infrastructure as code</span> and automating everything that can be automated.
            </p>
            
            <p>
              When I'm not configuring servers or writing deployment scripts, I'm exploring new technologies, contributing to open-source projects, or mentoring aspiring developers. I'm always excited to tackle complex infrastructure challenges and turn them into elegant, maintainable solutions.
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
              { value: "2+", label: "Years Experience" },
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
