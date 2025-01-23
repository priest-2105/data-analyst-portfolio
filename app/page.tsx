import CollaborateSection from "@/components/homepage/collaborateSection";
import HeroSection from "@/components/homepage/heroSection";
import ProjectList from "@/components/homepage/projectList";
import SkillsSection from "@/components/homepage/skillssection";
import FooterSection from "@/components/layout/footer";
import NavbarSection from "@/components/layout/navbar";

export default function Home() {

  

  return (
    <div className="bg-white">
    <HeroSection/>
    <div className="bg-[#f1f1f1]">
    <SkillsSection/>
    <CollaborateSection/>
    <ProjectList/>
    <FooterSection/>
    </div>
    </div>
  );
}