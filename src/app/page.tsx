import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ValuePropositionSection } from "@/components/sections/ValuePropositionSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full">
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <ToolsSection />
        <ExperienceSection />
        <AchievementsSection />
        <CertificationsSection />
        <EducationSection />
        <ValuePropositionSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
