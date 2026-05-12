import HeroSection from "@/app/components/home/HeroSection";
import MissionSection from "@/app/components/home/MissionSection";
import AboutSection from "@/app/components/home/AboutSection";
import CubeSatSection from "@/app/components/home/CubeSatSection";
import ComponentsSection from "@/app/components/home/ComponentsSection";
import JoinSection from "@/app/components/home/JoinSection";
import SectionDivider from "@/app/components/home/SectionDivider";
import Footer from "@/app/components/Footer";

export default function Page() {
  return (
    <div className="bg-[#050508] text-white overflow-x-clip">
      <HeroSection />
      <SectionDivider />
      <MissionSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <CubeSatSection />
      <SectionDivider />
      <ComponentsSection />
      <SectionDivider />
      <JoinSection />
      <SectionDivider />
      <Footer />
    </div>
  );
}