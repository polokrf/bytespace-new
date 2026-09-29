import { BrandLogos } from '@/components/modules/Home/BrandLogos';
import { HeroContent } from '@/components/modules/Home/HeroContent';
import { Navbar } from '@/components/layout/Navbar';
import { PassionSection } from '@/components/modules/Home/PassionSection';
import { CourseSection } from '@/components/modules/Home/CourseSection';
import { LearningPathsSection } from '@/components/modules/Home/LearningPathsSection';
import { GrowthAndCreator } from '@/components/modules/Home/GrowthAndCreator';
import CreatorCTA from '@/components/modules/Home/CreatorCTA';
import { Testimonials } from '@/components/modules/Home/Testimonials';

export default function Home() {
  return (
    <main>
      <section className=" bg-[#003BE2]">
       
        <HeroContent />
      </section>
      <section>
        <BrandLogos />
        <PassionSection />
        <CourseSection />
        <LearningPathsSection />
        <GrowthAndCreator />
        <CreatorCTA />
        <Testimonials/>
      </section>
    </main>
  );
}
