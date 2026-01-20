import React from "react";
import styles from "./Exco.module.css";

import Ex1 from "../assets/Ex1.png";
import Ex2 from "../assets/Ex2.png";
import Ex3 from "../assets/Ex3.png";
import Ex4 from "../assets/Ex4.png";
import Ex5 from "../assets/Ex5.png";
import Ex6 from "../assets/Ex6.png";
import Ex7 from "../assets/Ex7.png";
import Ex8 from "../assets/Ex8.png";
import Ex9 from "../assets/Ex9.png";
import Ex10 from "../assets/Ex10.png";
import Ex11 from "../assets/Ex11.png";
import Team1 from "../assets/Team1.jpg";
import Awards1 from "../assets/Awards1.png";
import Awards2 from "../assets/Awards2.png";

const members = [
  { img: Ex1, name: "Rtr. Himaza Zahara Jayah", position: "President" },
  { img: Ex2, name: "Rtr. Krishanth Arawindakumar", position: "Secretary" },
  { img: Ex3, name: "Rtr. Thaviru Hettiarachchi", position: "Vice President" },
  { img: Ex4, name: "Rtr. Iffath Saleem", position: "Assistant Secretary" },
  { img: Ex5, name: "Rtr. Kevin Dinal Fernando", position: "Assistant Secretary" },
  { img: Ex6, name: "Rtr. Sachira Chirathvin Delankawala", position: "Treasurer" },
  { img: Ex7, name: "Rtr. Mohomed Rishad", position: "Sergeant at Arms" },
  { img: Ex8, name: "Rtr. W. Vonara Supesha Perera", position: "Editor Chair" },
  { img: Ex9, name: "Rtr. Umaiyone Ahilesh", position: "Digital Communications" },
  { img: Ex10, name: "Rtr. Thevinu Bandara", position: "Membership Chair" },
  { img: Ex11, name: "Rtr. Nethini Samadhi Galagama", position: "Membership Chair" },
];

const Exco = () => {
  const topTwo = members.slice(0, 2); 
  const others = members.slice(2);
  const firstRow = others.slice(0, 5);
  const secondRow = others.slice(5, 9);

  const renderCard = (member, index, large = false) => (
    <div
      key={index}
      className={`${styles.card} ${large ? styles.largeCard : ""}`}
    >
      <div className={styles.wrapper}>
        <img src={member.img} alt={member.name} className={styles.coverImage} />
      </div>
      <div className={styles.hoverOverlay}>
        <p className={styles.hoverName}>{member.name}</p>
        <p className={styles.hoverPosition}>{member.position}</p>
      </div>
    </div>
  );

  return (
    <div className={styles.excoContainer}>
      <h2 className={styles.ourTeam}>OUR TEAM</h2>

      {/* TEAM INTRO SECTION */}
      <div className={styles.teamIntro}>
        <div className={styles.teamText}>
          <h3 className={styles.teamTitle}>RACIIT</h3>
          <p>{`Chartered on April 20, 2010, under the sponsorship of the Rotary Club of Pan-Colombo, the Rotaract Club of the Informatics Institute of Technology (RACIIT) has been dedicated to service, leadership, and community development for over 15 years.`}</p>
          <p>{`Starting strong as the Best Charter Club of the Year under charter president Rtr. Tanya Senaratne, RACIIT has grown into a platform for youth empowerment and social impact. With over 130 recognitions from Rotaract District 3220, our members drive meaningful change through signature projects like Sally's Manor, WePlant, Dansala, Trailblazers, and Ground Rules.`}</p>
          <p>{`We empower young leaders to collaborate, innovate, and tackle real-world challenges while fostering fellowship and raising awareness for causes that matter.`}</p>
        </div>
        <div className={styles.teamImageWrapper}>
          <img src={Team1} alt="Team" className={styles.teamImage} />
        </div>
      </div>

      {/* EXECUTIVE COMMITTEE BOARD */}
      <h2 className={styles.excoHeading}>Executive Committee Board</h2>

      {/* President + Secretary */}
      <div className={styles.topTwoWrapper}>
        {topTwo.map((member, i) => renderCard(member, i, true))}
      </div>

      {/* Other Members */}
      <div className={styles.membersWrapper}>
        <div className={styles.row}>{firstRow.map(renderCard)}</div>
        <div className={styles.row}>{secondRow.map(renderCard)}</div>
      </div>

      {/* AWARDS Section */}
      <h2 className={styles.awardsHeading}>AWARDS</h2>

      {/* Center Image of Awards1 */}
      <div className={styles.awardsCenterImage}>
        <img src={Awards1} alt="Awards" className={styles.awardsImage} />
      </div>

      {/* Awards Description + Awards2 image */}
      <div className={styles.awardsIntro}>
        <div className={styles.awardsText}>
          <p>{`Over the years, RACIIT has consistently demonstrated excellence, innovation, and dedication to community service, earning numerous accolades at both district and national levels. From recognition for the most outstanding community service projects and impactful initiatives like Young at Heart and Trailblazers, to awards for professional development, sustainability, and public image, our club has set the standard for Rotaract leadership and service.`}</p>
          <p>{`Our members’ commitment to creating meaningful change has been honored with Gold, Silver, and Bronze awards across multiple focus areas, including economic and community development, health and well-being, environmental sustainability, membership growth, and fellowship initiatives. These achievements reflect the passion, collaboration, and perseverance of our Rotaractors, who continue to empower communities, inspire youth, and uphold the values of service above self.`}</p>
        </div>
        <div className={styles.awardsImageWrapper}>
          <img src={Awards2} alt="Awards Detail" className={styles.awardsImage} />
        </div>
      </div>
    </div>
  );
};

export default Exco;
