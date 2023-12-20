import { HelpsSection } from "./sections/Helps/helps-section";
import { ConstructCards } from "./sections/construct-cards/constructCards";
import HeroSection from "./sections/hero-section/Hero-section";

export default function Constructor() {
    return (
        <>
           <HeroSection/>
           <ConstructCards/>
           <HelpsSection/>
        </>
    );
}