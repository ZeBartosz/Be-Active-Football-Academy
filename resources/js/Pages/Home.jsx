import ContactUsSection from "./Components/Home/ContactUsSection.jsx";
import Hero from "./Components/Home/hero.jsx";
import ProgramsSection from "./Components/Home/programsSection.jsx";
import StaffSection from "./Components/Home/staffSection.jsx";
import ActionSection from "./Components/Home/actionSection.jsx";

export default function Home({ programGroups = [], staff = [] }) {
    return (
        <>
            <Hero />
            <ProgramsSection programGroups={programGroups} />
            <StaffSection staff={staff} />
            <ActionSection />
            <ContactUsSection />
        </>
    );
}
