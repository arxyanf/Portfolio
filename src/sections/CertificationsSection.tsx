import { motion, useInView } from "framer-motion";
import { ExternalLink, Award, BadgeCheck } from "lucide-react";
import { useRef } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { certifications, Certification } from "@/data/certifications";
import { Button } from "@/components/ui/button";

interface CertificationCardProps {
  cert: Certification;
  index: number;
}

const CertificationCard = ({ cert, index }: CertificationCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative h-full rounded-2xl overflow-hidden backdrop-blur-xl bg-card/80 border border-border/50 hover:border-primary/50 transition-all duration-300">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ boxShadow: "inset 0 0 30px hsl(var(--primary) / 0.1)" }}
        />

        <div className="relative p-6">
          {/* Badge icon */}
          <div className="flex items-start justify-between mb-4">
            <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-2xl">
              {cert.badge}
            </div>
            <div className="flex items-center gap-1 text-primary">
              <BadgeCheck className="w-5 h-5" />
              <span className="text-xs font-medium">Verified</span>
            </div>
          </div>

          {/* Content */}
          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {cert.name}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-1">
            {cert.issuer}
          </p>
          
          <p className="text-muted-foreground/70 text-xs mb-4">
            Issued: {cert.date}
          </p>

          {cert.credentialId && (
            <p className="text-xs font-mono text-muted-foreground/60 mb-4 truncate">
              ID: {cert.credentialId}
            </p>
          )}

          {/* Verify button */}
          {cert.verificationUrl && (
            <Button
              variant="outline"
              size="sm"
              className="w-full group/btn border-primary/30 hover:bg-primary/10 hover:border-primary/50"
              asChild
            >
              <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer">
                <Award className="w-4 h-4 mr-2" />
                Verify Credential
                <ExternalLink className="w-3 h-3 ml-2 opacity-50 group-hover/btn:opacity-100 transition-opacity" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const CertificationsSection = () => {
  return (
    <SectionWrapper id="certifications" className="bg-background">
      <SectionTitle
        title="Certifications"
        subtitle="Professional credentials and achievements"
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {certifications.map((cert, index) => (
          <CertificationCard key={cert.id} cert={cert} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default CertificationsSection;
