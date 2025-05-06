import MainSection from "./Components/Home/MainSection.jsx";
import AboutUsSection from "./Components/Home/AboutUsSection.jsx";
import ProgramGroupSection from "./Components/Home/ProgramGroupSection.jsx";
import MeetTheTeamSection from "./Components/Home/MeetTheTeamSection.jsx";
import ContactUsSection from "./Components/Home/ContactUsSection.jsx";

export default function Home({ programGroups, staff }) {
    return (
        <>
            <MainSection background={null} />
            <AboutUsSection />
            <ProgramGroupSection programs={programGroups} />
            <MeetTheTeamSection staff={staff} />
            <ContactUsSection />
        </>
    );
}
