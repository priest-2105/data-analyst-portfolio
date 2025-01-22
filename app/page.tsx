import HeroSection from "@/components/homepage/heroSection";
import FooterSection from "@/components/layout/footer";
import NavbarSection from "@/components/layout/navbar";

export default function Home() {

  

  return (
    <div className="min-h-screen bg-gray-50">
    <HeroSection/>
    <FooterSection/>
    </div>
  );
}