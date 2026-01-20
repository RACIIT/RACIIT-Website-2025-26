import React, { useState, useEffect } from "react";
import "./ImageSliderNew.css";

// Replace these with your actual images
import BodyImg1 from "../assets/BodyImg1.png";
import BodyImg2 from "../assets/BodyImg8.png";
import BodyImg5 from "../assets/BodyImg5.png";
import CS2 from "../assets/CS11.png";
import CS4 from "../assets/CS4.png";
import BodyImg6 from "../assets/PD4.png";
import BodyImg7 from "../assets/IS1.png";
import DIGI from "../assets/Haxmas.png";
import CS from "../assets/CS6.png";
import BodyImg10 from "../assets/WePlant.jpg";
import N1 from "../assets/1.jpg";
import N2 from "../assets/2.jpg";
import N3 from "../assets/3.jpg";
import N4 from "../assets/4.jpg";
import Emithu from "../assets/Emithu.jpg";



const slides = [
  {
    image: N1,
    title: "Sally's Manor",
    desc: "Sally's Manor: A signature horror house and DJ party fundraiser supporting community service projects.",
  },
  {
    image: BodyImg1,
    title: "Hot Dog Showdown 2024",
    desc: "The Hot Dog Showdown (HDS) 2024 celebrated 10 years of flavor and fun.",
  },
  {
    image: N4,
    title: "Ground Rules",
    desc: "Ground Rules is our ongoing sports fellowship project hosting friendly futsal, basketball, and badminton matches with other Rotaract clubs..",
  },
  {
    image: Emithu,
    title: "E-mithudama",
    desc: "Fellowship Through Service",
  },
  {
    image: BodyImg10,
    title: "We Plant",
    desc: "WePlant restored 1,500 mangroves in Argumbay with support from the Sri Lanka Navy, Special Task Force, and the Forest Department of Sri Lanka.",
  },
  {
    image: CS,
    title: "Project WeCan",
    desc: "Breaking the Silence and Stigma Surrounding Menstruation",
  },
  {
    image: DIGI,
    title: "Haxmas : Ideathon / Hackathon",
    desc: "Extra description for Sally's Manor.",
  },
  {
    image: CS4,
    title: "Project Serenity",
    desc: "Extra description for Hot Pockets.",
  },
  {
    image: N3,
    title: "OnScreen",
    desc: "OnScreen nurtures filmmaking talent with director and writer workshops, leading to an exciting short film competition.",
  },
  {
    image: N2,
    title: "Serenity Samaja",
    desc: "Serenity Samaja is a collaborative fellowship project that brings together multiple Rotaract clubs.",
  },
];

const ImageSliderNew = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 7s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="carousel-container">
      <img
        src={slides[currentIndex].image}
        alt={slides[currentIndex].title}
        className="carousel-img"
      />

      {/* Force re-render with key={currentIndex} to restart animations */}
      <div key={currentIndex} className="carousel-content">
        <h2>{slides[currentIndex].title}</h2>
        <p>{slides[currentIndex].desc}</p>
        <button className="readMore">Read More</button>
      </div>

      {/* Navigation buttons */}
      <div className="arrows">
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default ImageSliderNew;
