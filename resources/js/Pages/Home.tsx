import ActionSection from '../Components/Home/actionSection.js';
import ContactUsSection from '../Components/Home/ContactUsSection.js';
import Hero from '../Components/Home/hero.js';
import StaffSection from '../Components/Home/staffSection.js';
import OfferSection from '../Components/Home/offerSection.js';

export default function Home() {
  return (
    <>
      <Hero />
      <OfferSection />
      <StaffSection />
      <ActionSection />
      <ContactUsSection />
    </>
  );
}
