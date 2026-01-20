import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import ImageSliderNew from "./ImageSliderNew";
import WhoWeAre from "./WhoWeAre";
import ChromaGrid from "./ChromaGrid";
import InfiniteMenu from "./InfiniteMenu";
import NeonBorderWrapper from "./NeonBorderWrapper";
import Avenues from "./Avenues";
import AvenuesVideo from "../assets/Avenues.mp4";

import ClubService from "../assets/CS.jpg";
import CommunityService from "../assets/comms.jpg";
import InternationalService from "../assets/IS.jpg";
import ProfessionalDevelopment from "../assets/PD.jpg";
import Sports from "../assets/Sports.jpg";
import PublicRelations from "../assets/PR.jpg";
import DigitalCommunication from "../assets/Digi.jpg";                                                             
import Membership from "../assets/Membership.jpg";
import Finance from "../assets/Finance.jpg";
import IT from "../assets/Haxmas.png";
import We from "../assets/WePlant.jpg";
import N1 from "../assets/1.jpg";
import N2 from "../assets/2.jpg";
import N3 from "../assets/3.jpg";
import N4 from "../assets/4.jpg";
import Slogan from "../assets/SloganImg.jpg";
import Slogan1 from "../assets/SloganImg1.jpg";
import Slogan2 from "../assets/SloganImg2.jpg";
import Slogan4 from "../assets/SloganImg4.jpg";
import SloganNew from "../assets/SloganImgNew.jpg";
import Blogs from "./Blogs";



import ProjectSlider from "./ProjectSlider";

import "./HomeBody.css";

const avenues = [
  { name: "Club Service", img: ClubService, path: "/" },
  { name: "Community Service", img: CommunityService, path: "/" },
  { name: "International Service", img: InternationalService, path: "/" },
  { name: "Professional Development", img: ProfessionalDevelopment, path: "/" },
  { name: "Sports", img: Sports, path: "/" },
  { name: "Public Relations", img: PublicRelations, path: "/" },
  { name: "Digital Communication", img: DigitalCommunication, path: "/" },
  { name: "Membership", img: Membership, path: "/" },
  { name: "Finance", img: Finance, path: "/" },
];

const HomeBody = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <>
      {/* New Image Slider */}
      <ImageSliderNew />

      {/* ✅ Slogan Image Section */}
      <div className="slogan-image-wrapper">
        <img src={SloganNew} alt="Slogan" className="slogan-image" />
      </div>

      <WhoWeAre />

      <NeonBorderWrapper>
        <div className="avenues-section">
          <video
            className="avenue-video"
            src={AvenuesVideo}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="avenues-overlay-content">
            <Avenues />
          </div>
        </div>
      </NeonBorderWrapper>

      {/* Gallery Section */}
      <section className="gallery" aria-label="Project image gallery">
        <div className="galhead">
          <h1>PROJECTS</h1>
          <p>Explore our events in action</p>
        </div>
        <ChromaGrid />
      </section>

      <Blogs />
      
      <br /><br />
      <ProjectSlider />

      {/* Counter Section */}
      <section className="counter-section" ref={ref} aria-label="Statistics counters">
        <div className="counter-box">
          <h2>{inView && <CountUp end={500} duration={2} />}+</h2>
          <p>Projects Completed</p>
        </div>
        <div className="counter-box">
          <h2>{inView && <CountUp end={500} duration={2} />}+</h2>
          <p>Memberships</p>
        </div>
        <div className="counter-box">
          <h2>{inView && <CountUp end={20} duration={2} />}+</h2>
          <p>Awards</p>
        </div>
      </section>

      {/* Reach Section */}
      <section className="destination" aria-label="Our Reach">
        <h1>Our Reach</h1>
        <p>{"How far we've come"}</p>
        <div className="first-des">
          <div className="des-text">
            <h2>Beyond Boundaries</h2>
            <p>
              From local grassroots to national recognition, our projects have touched many lives.
              Be it digital innovation or community service, we are expanding our reach every day.
            </p>
          </div>
          <div className="image" aria-hidden="true">
            <img src={IT} alt="Reach example 1" />
            <img src={We} alt="Reach example 2" />
          </div>
        </div>
      </section>
      
    </>
  );
};

export default HomeBody;
