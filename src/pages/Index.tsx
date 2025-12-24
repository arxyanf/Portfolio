import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import SkillsSection from "@/sections/SkillsSection";
import FocusAreasSection from "@/sections/FocusAreasSection";
import ProjectsSection from "@/sections/ProjectsSection";
import ExperienceSection from "@/sections/ExperienceSection";
import CertificationsSection from "@/sections/CertificationsSection";
import ContactSection from "@/sections/ContactSection";
import AboutMeModal from "@/components/AboutMeModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Enable dark mode by default
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onLogoClick={() => setIsModalOpen(true)} />
      <main>
        <HeroSection onNameClick={() => setIsModalOpen(true)} />
        <AboutSection />
        <SkillsSection />
        <FocusAreasSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
      <AboutMeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Index;
