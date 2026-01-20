/* eslint-disable react/no-unknown-property */
import React from "react";
import "./ConnectWithUs.css";
import Lanyard from "./Lanyard"; 
import SocialCards from "../assets/SocialCards.png";

// social media 
import FB from "../assets/FB.png";
import IG from "../assets/IG.png";
import TT from "../assets/TT.png";
import YT from "../assets/YT.png";
import WA from "../assets/WA.png";
import LI from "../assets/LI.png";
import X from "../assets/X.png";

export default function ConnectWithUs() {
  const icons = [
    { src: FB, alt: "Facebook" },
    { src: IG, alt: "Instagram" },
    { src: TT, alt: "TikTok" },
    { src: YT, alt: "YouTube" },
    { src: WA, alt: "WhatsApp" },
    { src: LI, alt: "LinkedIn" },
    { src: X, alt: "Twitter (X)" },
  ];

  const getLink = (alt) => {
    switch (alt) {
      case "Facebook":
        return "https://web.facebook.com/iitrotaract/?_rdc=1&_rdr#";
      case "Instagram":
        return "https://www.instagram.com/rotaract_iit/";
      case "TikTok":
        return "https://www.tiktok.com/@rotaract_iit";
      case "YouTube":
        return "https://www.youtube.com/@iitrotaract";
      case "WhatsApp":
        return "https://whatsapp.com/channel/0029Vb6aTre35fLsQm3IyY1r";
      case "LinkedIn":
        return "https://www.linkedin.com/company/rotaract-club-of-iit";
      case "Twitter (X)":
        return "https://x.com/IITRotaract";
      default:
        return "#";
    }
  };

  return (
    <div className="connect-container" id="connect">
      <h2 className="connect-heading">STAY CONNECTED WITH US!</h2>

      <div className="connect-content">
        {/* Left image nd icons */}
        <div className="connect-image-section">
          <div className="connect-image-wrapper">
            <img src={SocialCards} alt="Social Cards" className="connect-image" />
          </div>

          
          <div className="social-icons under-image">
            {icons.map((icon, index) => (
              <a
                key={index}
                href={getLink(icon.alt)}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                <img src={icon.src} alt={icon.alt} className="social-icon" />
              </a>
            ))}
          </div>
        </div>

        {/* Right text nd lanyards */}
        <div className="connect-text">
          <p className="connect-description">
            We are excited to invite you all to join the official WhatsApp
            Channel of the Rotaract Club of IIT! Get all the latest updates,
            announcements, and highlights from RACIIT in one place. <br />
            <br />
            Being part of RACIIT means engaging in exciting activities,
            expanding your network, learning new skills, and meeting inspiring
            individuals and experts. Don’t miss the opportunity to stay
            connected and grow with us!
          </p>

          {/* Lanyards */}
          <div className="lanyard-wrapper">
            <Lanyard />
          </div>
        </div>
      </div>
    </div>
  );
}
