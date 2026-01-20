import React from "react";
import Navbar from "../Navbar";
import LetterGlitch from "../LetterGlitch";
import ProjectGallery from "./ProjectGallery";
import "./DigitalCommunication.css";


import HaxmasImg from "../../assets/Haxmas.png";
import DigitalImg from "../../assets/Digital.png";



const digitalProjects = [
  {
    title: "Haxmas : Ideathon / Hackathon",
    description:
      "A successful social media campaign that boosted community engagement using targeted ads and creative content.",
    image: HaxmasImg,
  },
  {
    title: "University 101 – Dive into the world of software",
    description:
      "Redesigned the official website for better user experience and increased traffic.",
    image: DigitalImg,
  },
];

export default function DigitalCommunication() {
  return (
    <div>
      {/* Glitch background */}
      <LetterGlitch
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
        text="DIGITAL COMMUNICATION"
        hight="40px"
      />
      <br></br>
      <br></br>
      

        {/* Project Gallery */}
        <div className="digitalcommunication-gallery-section">
          <ProjectGallery projects={digitalProjects} />
        </div>
      </div>
    
  );
}
