import HeroSection from "@/app/components/home/HeroSection";
import MissionSection from "@/app/components/home/MissionSection";
import AboutSection from "@/app/components/home/AboutSection";
import StatsSection from "@/app/components/home/StatsSection";
import CubeSatSection from "@/app/components/home/CubeSatSection";
import ComponentsSection from "@/app/components/home/ComponentsSection";
import JoinSection from "@/app/components/home/JoinSection";
import SectionDivider from "@/app/components/home/SectionDivider";
import FadeInSection from "@/app/components/home/FadeInSection";
import Footer from "@/app/components/Footer";

export default function Page() {
  return (
    <div className="bg-[#050508] text-white overflow-x-clip">
      <HeroSection />
      <SectionDivider />
      <FadeInSection>
        <MissionSection />
      </FadeInSection>
      <SectionDivider />
      <FadeInSection>
        <AboutSection />
      </FadeInSection>
      <SectionDivider />
      <FadeInSection>
        <StatsSection />
      </FadeInSection>
      <SectionDivider />
      <FadeInSection>
        <CubeSatSection />
      </FadeInSection>
      <SectionDivider />
      <FadeInSection>
        <ComponentsSection />
      </FadeInSection>
      <SectionDivider />
      <FadeInSection>
        <JoinSection />
      </FadeInSection>
      <SectionDivider />
      <FadeInSection>
        <Footer />
      </FadeInSection>
    </div>
  );
}
