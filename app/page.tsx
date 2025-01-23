import CollaborateSection from "@/components/homepage/collaborateSection"
import ContactSection from "@/components/homepage/contactSection"
import HeroSection from "@/components/homepage/heroSection"
import ProjectList from "@/components/homepage/projectList"
import SkillsSection from "@/components/homepage/skillssection"
import FooterSection from "@/components/layout/footer"
import ThemeSwitcher from "@/components/themeSwticher/index"

export default function Home() {
  return (
    <div className="bg-white dark:bg-black  transition-colors duration-300">
      <HeroSection />
      <div className="bg-[#f1f1f1] dark:bg-[#1f1f1f] transition-colors duration-300">
        <SkillsSection />
        <CollaborateSection />
        <ProjectList />
        <ContactSection />
        <FooterSection />
      </div>
      <ThemeSwitcher />
    </div>
  )
}

