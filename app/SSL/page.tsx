import { HelpsSection } from "@/app/components/Helps/helps-section";
import { SSLsSection } from "./sections/SSLs-section/SSLs-section";
import HeroSection from "./sections/hero-section/Hero-section";

export default function SSL() {
    return (
        <>
        <HeroSection/>
        <SSLsSection/>
        <HelpsSection/>
        </>
    );
}