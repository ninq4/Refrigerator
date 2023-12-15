import style from './page.module.scss';
import HeroSection from './sections/hero-section/Hero-section';
import ServiceSection from './sections/service-section/service-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceSection/>
    </>
  );
}
