import style from './page.module.scss';
import { HelpsSection } from './Helps/helps-section';
import { CommentsSection } from './comments-section/comments-section';
// import { DomenSection } from './domen-section/domen';
import HeroSection from './hero-section/Hero-section';
import ServiceSection from './service-section/service-section';

const AffiliateProgram = () => {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      {/* <DomenSection /> */}
      <HelpsSection />
      <CommentsSection />
    </div>
  )
}

export default AffiliateProgram
