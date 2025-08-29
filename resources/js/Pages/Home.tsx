import ContactUsSection from "../Components/Home/ContactUsSection.js";
import Hero from "../Components/Home/hero.js";
import ProgramsSection from "../Components/Home/programsSection.js";
import StaffSection from "../Components/Home/staffSection.js";
import ActionSection from "../Components/Home/actionSection.js";

export default function Home() {
    return (
        <>
            <Hero />
            <ProgramsSection />
            <StaffSection />
            <ActionSection />
            <ContactUsSection />
        </>
    );
}
