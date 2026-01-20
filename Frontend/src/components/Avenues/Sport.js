import React from "react";
import "./Sport.css";
import SportVideo from "../../assets/Sport.mp4";
import ProjectGallery from "./ProjectGallery"; 

import Skribbl from "../../assets/Skribbl.jpg";
import GroundRules from "../../assets/GroundRules.jpg";
import Blox from "../../assets/Blox.jpg";
import Coastal from "../../assets/Coastal.jpg";
import HotPockets from "../../assets/HotPockets.jpg";
import GameFest from "../../assets/GameFest.jpg";
import Pool from "../../assets/Pool.png";
import { image } from "framer-motion/client";

const Sport = () => {
  const sportProjects = [
    { title: "Skribbl : Use Your Imagination", description: "Skribbl is a free multiplayer drawing and guessing game...", image: Skribbl, fullDescription: "..." },
    { title: "Ground Rules", description: "Sports inculcate something in you that no institution...", image: GroundRules, fullDescription: "..." },
    { title: "BloX - The Ultimate Build Battle", description: "BLOX is an open Minecraft-building battle...", image: Blox, fullDescription: "..." },
    { title: "Coastal Kickoff", description: "The Rotaract Club of IIT recently launched a new initiative...", image: Coastal, fullDescription: "..." },
    { title: "Hot Pockets", description: "The 28th of August 2022 was another remarkable day...", image: HotPockets, fullDescription: "..." },
    { title: "Informatics Institute of Technology Game Fest (IGF)", description: "The Informatics Institute of Technology (IIT) Game Fest...", image: GameFest, fullDescription: "..." },
  ];

  return (
    <div className="sport-page">
      {/* Video */}
      <div className="sport-hero">
        <video autoPlay loop muted playsInline className="sport-video">
          <source src={SportVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="sport-overlay">
          <h1 className="sport-title">SPORT</h1>
          <p className="sport-subtitle">
            Encouraging fitness, teamwork, and camaraderie, this avenue promotes
            a healthy lifestyle through various sports activities, fostering
            unity and friendly competition within the community.
          </p>

          {/* Pool Game Button*/}
          <div className="sport-game-button">
            <a href="/Pool/index.html" target="_blank" rel="noopener noreferrer">
              <img src={Pool} alt="Play Pool Game" />
            </a>
          </div>
        </div>
      </div>

  
      <div className="sport-projects-section">
        <ProjectGallery projects={sportProjects} />
      </div>
    </div>
  );
};

export default Sport;
