import React from "react";
import "./JoinOurCommunity.css";

// social media icons
import FB from "../assets/FB.png";
import IG from "../assets/IG.png";
import TT from "../assets/TT.png";
import YT from "../assets/YT.png";
import LI from "../assets/LI.png";

const icons = [
  { src: FB, alt: "Facebook" },
  { src: IG, alt: "Instagram" },
  { src: TT, alt: "TikTok" },
  { src: YT, alt: "YouTube" },
  { src: LI, alt: "LinkedIn" },
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
    case "LinkedIn":
      return "https://www.linkedin.com/company/rotaract-club-of-iit";
    default:
      return "#";
  }
};

const JoinOurCommunity = () => {
  return (
    <section className="join-community-section">
      <div className="join-container">
        <h2 className="join-title">JOIN OUR COMMUNITY</h2>
        <p className="join-description">
          Engage with us to help the community while having fun!
        </p>

        <a
          href="https://www.whatsapp.com/channel/0029Vb6aTre35fLsQm3IyY1r"
          target="_blank"
          rel="noopener noreferrer"
          className="join-btn"
        >
          BECOME A RACIIT MEMBER
        </a>

        <ul className="social-links">
          {icons.map((icon) => (
            <li key={icon.alt}>
              <a href={getLink(icon.alt)} target="_blank" rel="noopener noreferrer">
                <img src={icon.src} alt={icon.alt} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default JoinOurCommunity;
