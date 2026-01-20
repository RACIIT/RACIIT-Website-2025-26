import "./App.css";
import { Routes, Route } from "react-router-dom";
import BGVideo from './components/BGvideo';
import HomeBody from './components/HomeBody';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import ScrollToTop from './components/ScrollToTop';
import Community from "./components/JoinOurCommunity";

// Avenue pages
import ClubService from './components/Avenues/ClubService';
import CommunityService from './components/Avenues/CommunityService';
import InternationalService from './components/Avenues/InternationalService';
import ProfessionalDevelopment from './components/Avenues/ProfessionalDevelopment';
import Sport from './components/Avenues/Sport';
import PublicRelation from './components/Avenues/PublicRelation';
import DigitalCommunication from './components/Avenues/DigitalCommunication';

// About pages
import About from './components/About';
import AnnualReport1 from './components/AnnualReport1';


export default function App() {
  return (
    <div className="App">
      <BGVideo />
      <Navbar />
      <ScrollToTop /> {/* Scroll to top on route change */}
      <Routes>
        <Route path="/" element={<HomeBody />} />
        <Route path="/club-service" element={<ClubService />} />
        <Route path="/community-service" element={<CommunityService />} />
        <Route path="/international-service" element={<InternationalService />} />
        <Route path="/professional-development" element={<ProfessionalDevelopment />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/public-relation" element={<PublicRelation />} />
        <Route path="/digital-communications" element={<DigitalCommunication />} />
        <Route path="/about" element={<About />} />
        <Route path="/annual-report" element={<AnnualReport1 />} />  
      </Routes>
      <Community />
      <Footer />
    </div>
  );
}
