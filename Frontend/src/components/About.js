import React, { useRef, useState, useEffect } from "react";
import "./About.css";
import aboutVideo from "../assets/RACIITVid.mp4";
import aboutVideo2 from "../assets/AboutUs.mp4";
import Exco from "./Exco";
import ConnectWithUs from "./ConnectWithUs"; // 
import GoldAward from "../assets/GoldAward.png";
import SilverAward from "../assets/SilverAward.png";
import BronzeAward from "../assets/BronzeAward.png";

// AwardItem 
const AwardItem = ({ imgSrc, description, type }) => (
  <div className="award-item">
    <img src={imgSrc} alt={type} className="award-image" />
    <div className={`award-caption ${type}`}>{description}</div>
  </div>
);

// AwardRow 
const AwardRow = ({ year, awards }) => (
  <div className="award-year-group">
    <h3 className="award-year-title">{year}</h3>
    <div className="award-row">
      {awards.map((award, index) => (
        <AwardItem
          key={index}
          imgSrc={award.imgSrc}
          description={award.description}
          type={award.type}
        />
      ))}
    </div>
  </div>
);

// AwardsSection 
const AwardsSection = () => {
  const awards2021 = [
    { imgSrc: GoldAward, description: "MOST OUTSTANDING COMMUNITY SERVICE PROJECT IN THE CATEGORY OF ‘ECONOMIC AND COMMUNITY DEVELOPMENT’", type: "gold" },
    { imgSrc: GoldAward, description: "AWARD OF RECOGNITION – “KITE FESTIVAL”", type: "gold" },
    { imgSrc: GoldAward, description: "DRR RECOGNITION", type: "gold" },
    { imgSrc: GoldAward, description: "MOST OUTSTANDING BLOG OF THE YEAR", type: "gold" },
    { imgSrc: GoldAward, description: "BEST CLUB OF THE YEAR", type: "gold" },
  ];

  const awards2022 = [
    { imgSrc: GoldAward, description: "DRR RECOGNITION FOR A PROJECT - E MITHDAMA", type: "gold" },
    { imgSrc: GoldAward, description: "MOST SUPPORTIVE CLUB OF THE YEAR", type: "gold" },
    { imgSrc: GoldAward, description: "MOST PARTICIPATIVE CLUB OF THE YEAR", type: "gold" },
    { imgSrc: GoldAward, description: "MOST OUTSTANDING INITIATIVE - E MITHUDAMA", type: "gold" },
    { imgSrc: GoldAward, description: "MOST SUSTAINABLE COMMUNITY SERVICE INITIATIVE - E MITHUDAMA", type: "gold" },
    { imgSrc: GoldAward, description: "ROTARACT DISTRICT CITATION", type: "gold" },
    { imgSrc: SilverAward, description: "MOST OUTSTANDING INITIATIVE - YOUNG AT HEART", type: "silver" },
    { imgSrc: SilverAward, description: "MOST OUTSTANDING PROFESSIONAL DEVELOPMENT INITIATIVE - TRAILBLAZERS", type: "silver" },
    { imgSrc: SilverAward, description: "MOST OUTSTANDING INTERACT CLUB INITIATIVE - TRAILBLAZERS", type: "silver" },
    { imgSrc: SilverAward, description: "MOST OUTSTANDING OVERALL PR EFFORT - PRO FUTSAL LEAGUE", type: "silver" },
    { imgSrc: BronzeAward, description: "MOST OUTSTANDING ESPORTS INITIATIVE - IGF", type: "bronze" },
  ];

  const awards2024 = [
    { imgSrc: GoldAward, description: "Most Outstanding Rotaract Club", type: "gold" },
    { imgSrc: GoldAward, description: "Most Outstanding President - Rtr. F. Amrah Zaharan", type: "gold" },
    { imgSrc: GoldAward, description: "Most Participative Rotaract Club", type: "gold" },
    { imgSrc: GoldAward, description: "Gold Distinction Award for Citation", type: "gold" },
    { imgSrc: GoldAward, description: "Most Impactful Community Service Initiative - Young at Heart", type: "gold" },
    { imgSrc: SilverAward, description: "Most Innovative Club Service Initiative - PFL 2025", type: "silver" },
    { imgSrc: BronzeAward, description: "Most Outstanding Website", type: "bronze" },
  ];

  return (
    <div className="awards-section">
      <h2 className="section-title">AWARDS</h2>
      <AwardRow year="2021/22" awards={awards2021} />
      <AwardRow year="2022/23" awards={awards2022} />
      <AwardRow year="2024/25" awards={awards2024} />
    </div>
  );
};

// Main
const About = () => {
  const videoRef = useRef(null);
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {});
    }
  }, []);

  return (
    <div className="about-container">
      {!videoEnded ? (
        <video
          ref={videoRef}
          className="about-video"
          src={aboutVideo}
          autoPlay
          muted
          playsInline
          onEnded={() => setVideoEnded(true)}
        />
      ) : (
        <div className="about-video-container">
          <video
            src={aboutVideo2}
            autoPlay
            loop
            muted
            playsInline
            className="about-video secondary"
          />
          <div className="about-text-overlay">ABOUT US</div>
        </div>
      )}

      {videoEnded && (
        <>
          <Exco />
          <div className="about-details">
            <AwardsSection />
          </div>

          
          <ConnectWithUs />
        </>
      )}
    </div>
  );
};

export default About;
