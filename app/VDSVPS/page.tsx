import { GuaranteeSection } from './sections/guarantee-section/guarantee-section';
import HeroSection from './sections/hero-section/Hero-section';
import { ProtectSection } from './sections/protect-section/protect-section';
import { ServersSection } from './sections/servers-section/servers-section';

export default function VDSVPS() {
  return (
    <>
      <HeroSection />
      <ServersSection />
      <ProtectSection />
      <GuaranteeSection />
    </>
  );
}
