
import React from "react";
import "../LightRays.css";
import LightRays from "../LightRays";
import ProjectGallery from "./ProjectGallery";
import "./ClubService.css";


import Futsal1 from "../../assets/Futsal.png";
import RACIITian from "../../assets/RACIITian.png";
import Unity from "../../assets/Unity.png";
import Serenity from "../../assets/Serenity.png";
import Shanthi from "../../assets/Shanthi.png";
import HariBn from "../../assets/HariBn.png";
import SleighIn from "../../assets/SleighIn.png";
import Anime from "../../assets/Anime.png";
import SecretSanta from "../../assets/SecretSanta.png";
import Installation15 from "../../assets/Installation15.png";
import Board from "../../assets/Board.png";
import MindFizz1 from "../../assets/MindFizz1.png";
import TransitionMeeting24 from "../../assets/TransitionMeeting24.png";
import MindFizz2 from "../../assets/MindFizz2.png";
import Futsal2 from "../../assets/Futsal2.png";
import BodyImg2 from "../../assets/BodyImg2.png";
import HariBn2 from "../../assets/HariBn2.png";
import HouseSystem from "../../assets/HouseSystem.png";
import BodyImg3 from "../../assets/BodyImg3.png";

const projects = [
  {
    title: "Pro Futsal League 2025: Five Years of Futsal Excellence",
    description: "⚽ A quick intro about the futsal league...",
    image: Futsal1,
    fullDescription:
      "Full details about the Pro Futsal League 2025 go here. You can add history, achievements, teams, and the significance of celebrating five years.",
  },
  {
    title: "RACIITian Magazine",
    description: "📖 Short intro about the annual magazine...",
    image: RACIITian,
    fullDescription:
      "Full description about the RACIITian Magazine, its history, importance, and the process of compiling and publishing.",
  },
  {
    title: "Unity Night",
    description: "🤝 Fellowship and fun in one event...",
    image: Unity,
    fullDescription:
      "Full description about Unity Night, including activities, games, bonding opportunities, and outcomes.",
  },
  {
    title: "Project Serenity",
    description: "🧘 Short note on mental wellness...",
    image: Serenity,
    fullDescription:
      "Full description about Project Serenity, meditation sessions, wellness impact, and feedback from members.",
  },
  {
    title: "Shanthi",
    description: "🎨 Celebrating peace through art...",
    image: Shanthi,
    fullDescription:
      "Full description about Shanthi project, cultural activities, art exhibitions, and peace-building initiatives.",
  },
  {
    title: "Hari Bn Concert",
    description: "🎶 A highlight musical event...",
    image: HariBn,
    fullDescription:
      "Full description about Hari Bn Concert, performers, audience, impact, and continuation over the years.",
  },
  {
    title: "Sleigh In",
    description: "🎄 A festive Christmas event...",
    image: SleighIn,
    fullDescription:
      "Full description about Sleigh In, Christmas spirit, decorations, performances, and how it brought members together.",
  },
  {
    title: "Anime Night",
    description: "🎥 A night of anime fun...",
    image: Anime,
    fullDescription:
      "Full description about Anime Night, screenings, cosplay competitions, and community engagement.",
  },
  {
    title: "Secret Santa",
    description: "🎁 Gift exchange fun...",
    image: SecretSanta,
    fullDescription:
      "Full description about Secret Santa, member participation, joy-sharing, and how it strengthened fellowship.",
  },
  {
    title: "15th Installation Ceremony",
    description: "🎉 Leadership transition event...",
    image: Installation15,
    fullDescription:
      "Full description about the 15th Installation Ceremony, speeches, new board introduction, and celebration highlights.",
  },
  {
    title: "Board of Directors",
    description: "👥 Meet the leaders...",
    image: Board,
    fullDescription:
      "Full description about the Board of Directors, their roles, responsibilities, and how they guide the club.",
  },
  {
    title: "MindFizz Round 1",
    description: "🧩 Quiz competition begins...",
    image: MindFizz1,
    fullDescription:
      "Full description about MindFizz Round 1, questions, participants, winners, and event flow.",
  },
  {
    title: "Transition Meeting 2024",
    description: "🔄 Outgoing and incoming boards meet...",
    image: TransitionMeeting24,
    fullDescription:
      "Full description about Transition Meeting 2024, key discussions, handover processes, and outcomes.",
  },
  {
    title: "MindFizz Round 2",
    description: "🧠 Advanced quiz round...",
    image: MindFizz2,
    fullDescription:
      "Full description about MindFizz Round 2, tougher rounds, finalists, and achievements.",
  },
  {
    title: "Futsal League 2024",
    description: "⚽ Previous year futsal event...",
    image: Futsal2,
    fullDescription:
      "Full description about Futsal League 2024, matches, winners, and how it set the stage for 2025.",
  },
  {
    title: "Body Image Awareness 2",
    description: "💡 Awareness campaign continues...",
    image: BodyImg2,
    fullDescription:
      "Full description about Body Image Awareness 2, workshops, activities, and participant experiences.",
  },
  {
    title: "Hari Bn 2",
    description: "🎶 Another musical success...",
    image: HariBn2,
    fullDescription:
      "Full description about Hari Bn 2, lineup, event highlights, and impact on members.",
  },
  {
    title: "House System",
    description: "🏠 A new initiative for teams...",
    image: HouseSystem,
    fullDescription:
      "Full description about House System, how it was introduced, houses created, and its effect on member bonding.",
  },
  {
    title: "Body Image Awareness 3",
    description: "✨ Final awareness session...",
    image: BodyImg3,
    fullDescription:
      "Full description about Body Image Awareness 3, key messages, outcomes, and positive feedback.",
  },
];

const ClubService = () => {
  return (
    <div className="club-service-container">
      {/* Hero Section N Light Rays */}
      <div className="clubservice-hero-section">
        <LightRays />
        <div className="clubservice-title-overlay">
          <h1>CLUB SERVICE</h1>
        </div>
      </div>

      {/* Project Gallery */}
      <div className="clubservice-gallery-section">
        <ProjectGallery projects={projects} />
      </div>
    </div>
  );
};

export default ClubService;
