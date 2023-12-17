import style from './page.module.scss';
import { HelpsSection } from './sections/Helps/helps-section';
import { DomenSection } from './sections/domen-section/domen';
import HeroSection from './sections/hero-section/Hero-section';
import ServiceSection from './sections/service-section/service-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceSection/>
      <DomenSection />
      <HelpsSection />
    </>
  );
}
