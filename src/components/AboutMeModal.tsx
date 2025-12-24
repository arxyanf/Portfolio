import { motion, AnimatePresence } from "framer-motion";
import { X, Terminal, Heart, Zap, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { getRandomCategory } from "@/data/funFacts";

interface AboutMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutMeModal = ({ isOpen, onClose }: AboutMeModalProps) => {
  const [funContent, setFunContent] = useState({ type: "", content: "" });

  useEffect(() => {
    if (isOpen) {
      setFunContent(getRandomCategory());
    }
  }, [isOpen]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "joke":
        return "😄";
      case "fact":
        return "💡";
      case "mindset":
        return "🧠";
      default:
        return "✨";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "joke":
        return "Dev Joke";
      case "fact":
        return "Fun Fact";
      case "mindset":
        return "Dev Mindset";
      default:
        return "Thought";
    }
  };

  const techTags = [
    { icon: Terminal, label: "Linux (Ubuntu)" },
    { icon: Heart, label: "Docker" },
    { icon: Zap, label: "Cloud & DevOps" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/70 backdrop-blur-xl z-50"
          />

          {/* Modal Container - Centered */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-4xl"
            >
              <div
                className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-card/60 border border-border/30"
                style={{
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.4)"
                }}
              >

                {/* Close button */}
                <motion.button
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.3 }}
                  onClick={onClose}
                  className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-background/50 hover:bg-background/80 border border-border/50 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
                >
                  <X className="w-5 h-5" />
                </motion.button>

                <div className="relative flex flex-col md:flex-row min-h-[500px] md:min-h-[400px]">

                  {/* Left Side - Profile Image Panel */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="relative w-full md:w-[45%] h-64 md:h-auto overflow-hidden"
                  >
                    {/* Profile Image */}
                    <div className="absolute inset-0">
                      <img
                        src="/Portfolio/images/profile.jpg"
                        alt="Aryan Vaishnav"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to gradient placeholder if image fails
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      {/* Fallback placeholder (hidden by default) */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 items-center justify-center hidden">
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-primary/40 to-accent/40 border border-primary/30 flex items-center justify-center">
                          <span className="text-5xl md:text-6xl font-bold text-foreground/90">AV</span>
                        </div>
                      </div>
                    </div>

                    {/* Dark overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-br from-background/20 to-background/40" />

                    {/* Image overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card/80 md:block hidden" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent md:hidden" />

                    {/* Edge glow */}
                    <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden md:block" />
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent md:hidden" />

                    {/* Floating particles */}
                    <motion.div
                      animate={{ y: [-10, 10, -10], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-10 left-10 w-2 h-2 rounded-full bg-primary/60"
                    />
                    <motion.div
                      animate={{ y: [10, -10, 10], opacity: [0.4, 0.7, 0.4] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="absolute bottom-20 right-10 w-3 h-3 rounded-full bg-accent/60"
                    />
                  </motion.div>

                  {/* Right Side - Content */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex-1 p-6 md:p-8 flex flex-col justify-center"
                  >
                    {/* Name with sparkle */}
                    <div className="flex items-center gap-2 mb-1">
                      <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-3xl md:text-4xl font-bold text-foreground"
                      >
                        Aryan Vaishnav
                      </motion.h2>
                      <motion.div
                        animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      >
                        <Sparkles className="w-5 h-5 text-primary" />
                      </motion.div>
                    </div>

                    {/* Role */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 }}
                      className="text-primary font-semibold text-lg mb-4"
                    >
                      Cloud & DevOps Engineer
                    </motion.p>

                    {/* Bio */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base"
                    >
                      Cloud & DevOps Engineer focused on building scalable infrastructure,
                      automating deployments, and making systems reliable, secure, and boring
                      (in a good way).
                    </motion.p>

                    {/* Highlight Card - Dev Mindset */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45 }}
                      className="relative rounded-xl p-4 mb-6 overflow-hidden"
                      style={{
                        background: "linear-gradient(135deg, hsl(var(--primary) / 0.1), hsl(var(--accent) / 0.1))",
                        border: "1px solid hsl(var(--primary) / 0.2)",
                      }}
                    >
                      {/* Card glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />

                      <div className="relative">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">{getTypeIcon(funContent.type)}</span>
                          <span className="text-xs font-mono text-primary uppercase tracking-widest font-semibold">
                            {getTypeLabel(funContent.type)}
                          </span>
                        </div>
                        <p className="text-foreground/90 italic text-sm md:text-base leading-relaxed">
                          "{funContent.content}"
                        </p>
                      </div>
                    </motion.div>

                    {/* Tech Tags */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex flex-wrap gap-2"
                    >
                      {techTags.map((tag, index) => (
                        <motion.div
                          key={tag.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.55 + index * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 border border-primary/20 backdrop-blur-sm cursor-default"
                        >
                          <tag.icon className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium text-foreground/80">{tag.label}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AboutMeModal;
