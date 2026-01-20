import React from "react";
import { Link } from "react-router-dom"; // ✅ Added
import "./Avenues.css";

import ClubService from "../assets/CS.jpg";
import CommunityService from "../assets/comms.jpg";
import InternationalService from "../assets/IS.jpg";
import ProfessionalDevelopment from "../assets/PD.jpg";
import Sports from "../assets/Sports.jpg";
import PublicRelations from "../assets/PR.jpg";
import DigitalCommunication from "../assets/Digi.jpg";
import Membership from "../assets/Membership.jpg";
import Finance from "../assets/Finance.jpg";

const avenues = [
  { name: "Club Service", img: ClubService, path: "/club-service" },
  { name: "Community Service", img: CommunityService, path: "/community-service" },
  { name: "International Service", img: InternationalService, path: "/international-service" },
  { name: "Professional Development", img: ProfessionalDevelopment, path: "/professional-development" },
  { name: "Sports", img: Sports, path: "/sport" },
  { name: "Public Relations", img: PublicRelations, path: "/public-relation" },
  { name: "Digital Communication", img: DigitalCommunication, path: "/digital-communications" },
  { name: "Membership", img: Membership, path: "#" }, // Update later
  { name: "Finance", img: Finance, path: "#" }        // Update later
];

const Avenues = () => {
  return (
    <section className="avenues-wrapper">
      <h2 className="avenues-heading">ＡＶＥＮＵＥＳ</h2>
      <div className="avenue-cards-grid">
        {avenues.map(({ name, img, path }, idx) => (
          <Link to={path} key={idx} className="avenue-card-link">
            <div className="avenue-card-new">
              <img src={img} alt={name} className="avenue-img" />
              <p className="avenue-title">{name}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Avenues;
