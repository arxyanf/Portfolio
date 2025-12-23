import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/aryanvaishnav",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/aryanvaishnav",
    icon: Linkedin,
  },
  {
    name: "Email",
    url: "mailto:aryan@example.com",
    icon: Mail,
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <SectionWrapper id="contact">
      <SectionTitle
        title="Get In Touch"
        subtitle="Have a project in mind or want to collaborate? Let's talk!"
      />
      
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Let's build something amazing
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Whether you need help with cloud infrastructure, DevOps practices, or full-stack development, I'd love to hear from you.
            </p>
          </div>
          
          <div className="space-y-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-3 bg-card border border-border rounded-lg group-hover:border-primary/50 transition-colors">
                  <link.icon className="w-5 h-5" />
                </div>
                <span className="font-medium">{link.name}</span>
              </a>
            ))}
          </div>
        </motion.div>
        
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-xl p-6 space-y-5"
        >
          <div>
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-background"
            />
          </div>
          
          <div>
            <Input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-background"
            />
          </div>
          
          <div>
            <Textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              className="bg-background resize-none"
            />
          </div>
          
          <Button
            type="submit"
            className="w-full gap-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Message
              </>
            )}
          </Button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
