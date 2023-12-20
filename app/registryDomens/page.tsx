import { ChooseDomain } from "./sections/ChooseDomain/ChooseDomain";
import { HelpsSection } from "@/app/components/Helps/helps-section";
import { DomensSection } from "./sections/domens-section/domens-section";
import HeroSection from "./sections/hero-section/Hero-section"
import { PerformanceSection } from "./sections/performance-section/performance-section";
export default function RegistryDomens() {
    return (
        <>
        <HeroSection/>
        <DomensSection/>
        <PerformanceSection/>
        <ChooseDomain/>
        <HelpsSection/>
        </>
    );
}