/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef } from "react";
import "./WhoWeAre.css";

import Us from "../assets/Us.jpg";
import Img1 from "../assets/Emithu.jpg";
import Img2 from "../assets/Team.jpg";
import Img3 from "../assets/Team1.jpg";
import { Play } from "lucide-react";

export default function WhoWeAre() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          } else {
            entry.target.classList.remove("fade-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current.querySelectorAll(".fade-section");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="who-container" id="who-we-are" ref={sectionRef}>
      {/* BIG HEADING */}
      <h1 className="who-title fade-section">WHO WE ARE</h1>

      {/* WELCOME SECTION */}
      <div className="who-welcome fade-section">
        <h2 className="welcome-title">
          Welcome to Rotaract Club of Informatics Institute of Technology
        </h2>
        <p className="welcome-desc">
          Since our charter on April 20, 2010, RACIIT has been dedicated to
          empowering youth through service and leadership. Sponsored by the
          Rotary Club of Pan-Colombo and led by our charter president, Rtr.
          Tanya Senaratne, we began with strong momentum, earning the title of
          Best Charter Club of the Year.
          <br />
          <br />
          Fifteen years later, we have received over 130 recognitions from
          Rotaract District 3220, creating a lasting impact through projects
          such as Sally&apos;s Manor, WePlant, Dansala, Trailblazers, and Ground
          Rules. We are more than just a club; we are a community of
          changemakers addressing real-world challenges with passion and
          purpose.
        </p>
      </div>

      {/* PANORAMA IMAGE */}
      <div className="who-image-wrapper fade-section">
        <img src={Us} alt="Our Team" className="who-image" />
      </div>

      {/* MAIN CONTENT */}
      <div className="who-content fade-section">
        {/* LEFT IMAGES */}
        <div className="who-left">
          <div className="who-img-stack">
            <img src={Img1} alt="Team 1" className="who-photo bg-img" />
            <img src={Img2} alt="Team 2" className="who-photo mid-img" />
            <img src={Img3} alt="Team 3" className="who-photo top-img" />
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div className="who-right">
          <h3 className="who-subtitle">
            Making a Positive Impact on the Society since 2010
          </h3>

          <p className="who-desc">
            Join us in making a difference while building lifelong connections
            and realizing your potential. Together, we create positive change in
            the world and empower each other to thrive.
          </p>

          <div className="who-report">
            <p className="report-title">Secretary&apos;s Report 2024-2025 | RACIIT</p>
            <div className="report-video">
              <button className="play-btn">
                <Play size={28} color="#fff" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
