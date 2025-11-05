import { Hero } from '@/components/home/Hero';
import { Features } from '@/components/home/Features';
import { AudienceHighlights } from '@/components/home/AudienceHighlights';
import { Testimonials } from '@/components/home/Testimonials';
 
const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <AudienceHighlights />
      <Testimonials />
    </div>
  );
};

export default Index;
