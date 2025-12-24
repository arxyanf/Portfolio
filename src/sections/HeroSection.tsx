import { motion } from "framer-motion";
import { Download, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroScene from "@/components/3d/HeroScene";

interface HeroSectionProps {
  onNameClick?: () => void;
}

const HeroSection = ({ onNameClick }: HeroSectionProps) => {
  const name = "Aryan Vaishnav";

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Letter animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background Scene */}
      <HeroScene />

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background z-10" />

      <div className="relative container mx-auto px-4 md:px-6 pt-20 pb-10 z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-mono text-sm md:text-base mb-4"
          >
            Hello, I'm
          </motion.p>

          {/* Name - 3D Typing Animation */}
          <motion.div
            className="mb-4 text-center perspective-1000"
            style={{ perspective: "1000px" }}
          >
            <motion.h1
              onClick={onNameClick}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="inline-block text-4xl md:text-6xl lg:text-7xl font-bold cursor-pointer relative group"
              style={{ transformStyle: "preserve-3d" }}
            >
              {name.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="inline-block text-foreground hover:text-primary transition-colors duration-300"
                  style={{
                    textShadow: "0 4px 8px rgba(0,0,0,0.3), 0 8px 16px rgba(0,0,0,0.2)",
                    transformStyle: "preserve-3d",
                  }}
                  whileHover={{
                    scale: 1.2,
                    rotateY: 15,
                    color: "hsl(var(--primary))",
                    textShadow: "0 0 20px hsl(var(--primary) / 0.5), 0 4px 8px rgba(0,0,0,0.3)",
                    transition: { duration: 0.2 },
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6"
          >
            Cloud & DevOps Engineer
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Building scalable infrastructure, automating deployments, and crafting reliable cloud solutions that power modern applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="gap-2 text-base"
            >
              <FolderOpen className="w-5 h-5" />
              View Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="gap-2 text-base"
            >
              <a href="/Portfolio/Aryan_Vaishnav_Resume.pdf" download="Aryan_Vaishnav_Resume.pdf">
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
