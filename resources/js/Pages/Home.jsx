import ContactUsSection from "./Components/Home/ContactUsSection.jsx";
import Hero from "./Components/Home/hero.jsx";
import ProgramsSection from "./Components/Home/programsSection.jsx";
import StaffSection from "./Components/Home/staffSection.jsx";
import ActionSection from "./Components/Home/actionSection.jsx";

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
