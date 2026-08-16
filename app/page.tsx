import BackgroundShader from '@/components/canvas/BackgroundShader';
import Navbar from '@/components/layout/Navbar';
import VerticalNavbar from '@/components/layout/VerticalNavbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import WorkSection from '@/components/sections/WorkSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <BackgroundShader />
      <Navbar />
      <VerticalNavbar />

      <main className="max-w-container-max mx-auto px-margin-mobile md:px-gutter pt-32 pb-section-gap flex flex-col gap-section-gap overflow-x-hidden">
        <HeroSection />
        <ExperienceSection />
        <WorkSection />
        <ContactSection />
      </main>
      
      <Footer />
    </>
  );
}
