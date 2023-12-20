import { HelpsSection } from '../components/Helps/helps-section';
import { GuaranteeSection } from './sections/guarantee-section/guarantee-section';
import HeroSection from './sections/hero-section/Hero-section';
import ServiceSection from './sections/service-section/service-section';

export default function Mail() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <GuaranteeSection />
      <HelpsSection />
    </>
  );
}
