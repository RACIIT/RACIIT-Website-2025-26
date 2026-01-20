import React, { useState, useEffect, useRef } from "react";
import "./ImageSlider.css";

import BodyImg1 from "../assets/BodyImg1.png";
import BodyImg5 from "../assets/BodyImg5.png";
import BodyImg6 from "../assets/BodyImg6.png";
import IS1 from "../assets/IS1.png";

const slidesData = [
  {
    author: "Hot Dog Showdown",
    title: "Club Service",
    topic: "Community Fundraiser",
    description: `The Hotdog Showdown originated in the common room of IIT as a simple hotdog eating competition, but over the years, it has evolved into much more. Today, the event is one of Sri Lanka’s largest hotdog eating competitions, attracting over 3500 people, and has maintained its goal of raising funds for the community service initiative, E-Mithudama.

E-Mithudama is a signature initiative of IIT, aimed at building and rebuilding computer labs for schools in rural areas of Sri Lanka. The initiative provides the necessary equipment and conducts sessions to improve computer literacy and practical skills for the students.

The Hotdog Showdown, held in Colombo, not only showcased the competitive spirit of the participants but also provided a platform for small businesses and local vendors to promote their products. With over 30 food trucks and stalls, the event offered a diverse range of food, drinks, henna booths, and photo booths, providing a festive atmosphere for all food lovers.`,
    image: BodyImg1,
  },
  {
    author: "BLOX",
    title: "E Sports",
    topic: "Minecraft Building Battle",
    description: `BLOX is an open Minecraft-building battle that took place for the 2nd consecutive year. The game is about building Minecraft for a given theme.

Minecraft is one of the most recognizable video game franchises in the world and it is an ideal game for youngsters and adults. It allows players to create and break apart various kinds of blocks in 3D worlds. This game has two main modes: Survival and Creative. In this competition, we use the mode of creativity.

In Creative mode, Players are given all the supplies to build the creatures, and in this mode, they do not have to eat or survive. Creative mode offers a more open-ended experience such as flying and having access to an unlimited amount of in-game resources. It’s all about building anything from simple crafts like containers to weapons and building structures like houses, castles, and cities or even complex mechanical devices within the game’s world.`,
    image: BodyImg5,
  },
  {
    author: "Sally's Manor",
    title: "Club Service",
    topic: "Award Winning Event",
    description: `Sally's Manor, one of RACIIT’s many signature events, was initiated back in 2016-17 and during this short span of time, Sally’s Manor has received multiple awards as a mode of recognition. The most recent being the Silver Award won under “Most Outstanding Club Service Fellowship” category.

In this RI year, Sally’s Manor took place for the 6th consecutive year on the 30th of December with more than 350 brave individuals gathered at A&S Traders, located at the heart of Nugegoda to experience the horror and spine-chilling adventure that awaited them at the Manor.`,
    image: BodyImg6,
  },
  {
    author: "Project SEWA",
    title: "International Communication",
    topic: "Community Service",
    description: `Project Sewa; a joint initiative between the Rotaract Clubs of K.C. College India and Informatics Institute of Technology was revived on the 20th of December 2022.

Tanisha, the director of International Services, Meet Jain, the Secretary and Jamshed the immediate past President and Treasurer, were the three enthusiastic individuals from RCKC India who visited Sri Lanka. Upon their arrival, five Rotaractors from IIT warmly welcomed the group.

They enjoyed a meal of milk rice before setting off to Galle, with high hopes to partake in a remarkable community service project in Sri Lanka.

The Rotaractors wandered the streets of Galle Fort, where they were enthralled by the small trinkets being sold in the shops. After enjoying a wonderful cup of Lankan tea, the group headed to a member’s house, where they stayed the night. The next morning, they traveled to Kandy by train, where they engaged in many thrilling activities such as visiting Sri Dalada Maligawa, taking a boat trip, watching a snake charmer perform and visiting the beautiful and memorable Peradeniya Gardens.

After a long day of making memories, the group then continued on to Nuwara Eliya, where they spent the night at a prearranged venue.`,
    image: IS1,
  },
];

export default function ImageSlider() {
  const [slides, setSlides] = useState(slidesData);
  const [animClass, setAnimClass] = useState("");
  const timeRunning = 3000;
  const timeAutoNext = 7000;
  const timeoutRef = useRef(null);
  const autoNextRef = useRef(null);

  useEffect(() => {
    startAutoNext();
    return () => {
      clearTimeout(timeoutRef.current);
      clearTimeout(autoNextRef.current);
    };
  }, [slides]);

  const startAutoNext = () => {
    autoNextRef.current = setTimeout(() => {
      handleNext();
    }, timeAutoNext);
  };

  const handleNext = () => {
    setAnimClass("next");

    timeoutRef.current = setTimeout(() => {
      setAnimClass("");
      setSlides((prev) => [...prev.slice(1), prev[0]]);
    }, timeRunning);

    clearTimeout(autoNextRef.current);
    startAutoNext();
  };

  const handlePrev = () => {
    setAnimClass("prev");

    timeoutRef.current = setTimeout(() => {
      setAnimClass("");
      setSlides((prev) => [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)]);
    }, timeRunning);

    clearTimeout(autoNextRef.current);
    startAutoNext();
  };

  return (
    <div className={`carousel ${animClass}`}>
      <div className="list">
        {slides.map((slide, index) => (
          <div className="item" key={index} style={{ zIndex: index === 0 ? 1 : 0 }}>
            <img src={slide.image} alt={slide.title} />
            <div className="content">
              <div className="author">{slide.author}</div>
              <div className="title">{slide.title}</div>
              <div className="topic">{slide.topic}</div>
              <div className="des">{slide.description}</div>
              <div className="buttons">
                <button>View More</button>
                <button onClick={() => window.open("https://www.raciit.org/", "_blank")}>
                  Main Site
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="thumbnail">
        {slides.map((slide, index) => (
          <div className="item" key={index}>
            <img src={slide.image} alt={slide.title} />
            <div className="content">
              <div className="title">{slide.author}</div>
              <div className="description">{slide.title}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="arrows">
        <button id="prev" onClick={handlePrev}>
          &lt;
        </button>
        <button id="next" onClick={handleNext}>
          &gt;
        </button>
      </div>

      <div className="time"></div>
    </div>
  );
}
