import HeroSection from '../components/home/HeroSection';
import SocialProofSection from '../components/home/SocialProofSection';
import FeaturedShowsSection from '../components/home/FeaturedShowsSection';
import PlataformaTeaser from '../components/home/PlataformaTeaser';
import HowItWorksSection from '../components/home/HowItWorksSection';
import BenefitsSection from '../components/home/BenefitsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <HeroSection />
      <SocialProofSection />
      <FeaturedShowsSection />
      <PlataformaTeaser />
      <HowItWorksSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
