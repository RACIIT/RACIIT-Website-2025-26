import React from "react";
import "./InternationalService.css";
import ProjectGallery from "./ProjectGallery";

import Video from "../../assets/IS.mp4";
import IS1 from "../../assets/IS1.png";

const projects = [
  {
    title: "Project Sewa : Connecting Cultures",
    description: `Project Sewa; a joint initiative between the Rotaract Clubs of K.C. College India and Informatics Institute of Technology was revived on the 20th of December 2022. Tanisha, the director of International Services, Meet Jain, the Secretary and Jamshed the immediate past President and Treasurer, were the three enthusiastic individuals from RCKC India who visited Sri Lanka. Upon their arrival, five Rotaractors from IIT warmly welcomed the group. They enjoyed a meal of milk rice before setting off to Galle, with high hopes to partake in a remarkable community service project in Sri Lanka.

The Rotaractors wandered the streets of Galle Fort, where they were enthralled by the small trinkets being sold in the shops. After enjoying a wonderful cup of Lankan tea, the group headed to a member’s house, where they stayed the night. The next morning, they traveled to Kandy by train, where they engaged in many thrilling activities such as visiting Sri Dalada Maligawa, taking a boat trip, watching a snake charmer perform and visiting the beautiful and memorable Peradeniya Gardens. After a long day of making memories, the group then continued on to Nuwara Eliya, where they spent the night at a prearranged venue.`,
    image: IS1,
  },
];

const InternationalService = () => {
  return (
    <div className="international-container">
      {/* Video Section */}
      <div className="international-hero">
        <video autoPlay loop muted playsInline>
          <source src={Video} type="video/mp4" />
        </video>
        <div className="international-overlay">
          <h1>INTERNATIONAL SERVICE</h1>
        </div>
      </div>

      {/* Projects Section */}
      <div className="international-projects-section">
        <ProjectGallery projects={projects} />
      </div>
    </div>
  );
};

export default InternationalService;
