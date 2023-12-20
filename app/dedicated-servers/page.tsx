import style from './page.module.scss';
import { HelpsSection } from '@/app/components/Helps/helps-section'
import { CommentsSection } from './comments-section/comments-section';
import HeroSection from './hero-section/Hero-section';
import ServiceSection from './service-section/service-section';
import { PerformansSection } from "./performans-section/performans-section";


const DedicatedServers = () => {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <PerformansSection/>
      <HelpsSection />
      <CommentsSection />
    </>
  )
}

export default DedicatedServers
