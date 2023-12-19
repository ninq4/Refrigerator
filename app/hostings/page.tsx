import HeroSection from "./sections/hero-section/Hero-section";
import { HostingSection } from "./sections/hostings-section/hosting-section";
import { PerformansSection } from "./sections/performans-section/performans-section";
import { TechnologySection } from "./sections/technology-section/technology-section";
import { TransferSection } from "./sections/transfer-section/transfer-section";
import { TransferDomens } from "./sections/transferDomens/transferDomens";


export default function Hostings() {
    return (
        <>
            <HeroSection/>
            <HostingSection/>
            <PerformansSection/>
            <TechnologySection/>
            <TransferSection/>
            <TransferDomens/>
        </>
    );
}