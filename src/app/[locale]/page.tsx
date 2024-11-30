import {useTranslations} from 'next-intl';
import NavBar from "./components/NavBar";
import PresentationSection from "./components/PresentationSection"
import AboutSection from './components/AboutSection';
import ServiceSection from './components/ServiceSection';
import EmailSection from './components/EmailSection';
import PartnerSection from './components/PartnerSection';
import Footer from './components/Footer';


 
export default function Index() {
  const t = useTranslations('Index');
  return (
  <main className="flex min-h-screen flex-col bg-[white]">
    <NavBar />
    <div className="container mt-24 mx-auto px-12 py-16">
        <PresentationSection></PresentationSection>
        <AboutSection/>
        <ServiceSection/>
        <PartnerSection/>
        <EmailSection/>
        <Footer/>
      </div>
    </main>
  );
}