import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Users, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectSlider.css';

import Digital from '../assets/Digital.png';
import IS from '../assets/IS.jpg';
import CS from '../assets/Sallys.png';
import PD from '../assets/Emithu.jpg';
import CS2 from '../assets/CS2.png';
import IS1 from "../assets/Haxmas.png";

const ProjectSlider = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Sally's Manor",
      description: "“The greatness of a nation and its moral progress can be judged by the way its animals are treated.” - Mahatma Gandhi",
      image: CS,
      date: "November 2025",
      participants: 45,
      location: "Rural Districts",
      category: "Community Service"
    },
    {
      id: 2,
      title: "E-Mithudama",
      description: "Choosing a career path can be a daunting task, especially for youngsters who are still trying to figure out their interests and passions.",
      image: PD,
      date: "August 2025",
      participants: 120,
      location: "Umandawa Global Village",
      category: "Community Service"
    },
    {
      id: 3,
      title: "Amplifying the Silent: The Impact of Voice for the Voiceless",
      description: "“The advance of technology is based on making it fit in so that you don’t really even notice it.” – Bill Gates",
      image: Digital,
      date: "May 2024",
      participants: 80,
      location: "Community Centers",
      category: "Digital Communication"
    },
    {
      id: 4,
      title: "Reviving Coastal Nature: Project WePlants",
      description: "On April 26, 2025, Project WePlant launched an initiative planting 1,500 mangrove trees in Arugam Bay.",
      image: CS2,
      date: "June 2024",
      participants: 200,
      location: "National Parks",
      category: "Community Service"
    },
    {
      id: 5,
      title: "Haxmas : Ideathon / Hackathon",
      description: "A joint initiative between Rotaract Clubs of IIT and K.C. College India. Rotaractors visited Sri Lanka to strengthen cultural ties.",
      image: IS1,
      date: "November 2025",
      participants: 60,
      location: "Multiple Countries",
      category: "Digital Communniication"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProject(prev => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [projects.length]);

  const nextProject = () => {
    setCurrentProject(prev => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject(prev => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index) => {
    setCurrentProject(index);
  };

  return (
    <section className="project-slider-section" aria-label="Project Slider">
      <div className="project-slider-container">
        <h2 className="slider-title">OUR FEATURED PROJECTS</h2>
        <p className="slider-subtitle">
          Discover the meaningful projects that are making a difference in communities worldwide
        </p>

        <div className="slider-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={projects[currentProject].id}
              className="project-card"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="project-image-wrapper">
                <img src={projects[currentProject].image} alt={projects[currentProject].title} className="project-image" />
                <div className="project-category">{projects[currentProject].category}</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{projects[currentProject].title}</h3>
                <p className="project-description">{projects[currentProject].description}</p>
                <div className="project-info">
                  <div className="info-item">
                    <Calendar size={16} className="icon" />
                    <span>{projects[currentProject].date}</span>
                  </div>
                  <div className="info-item">
                    <Users size={16} className="icon" />
                    <span>{projects[currentProject].participants} participants</span>
                  </div>
                  <div className="info-item">
                    <MapPin size={16} className="icon" />
                    <span>{projects[currentProject].location}</span>
                  </div>
                </div>
                <button className="learn-more-btn" aria-label={`Learn more about ${projects[currentProject].title}`}>Learn More</button>
              </div>
            </motion.div>
          </AnimatePresence>

          <button className="nav-btn prev-btn" onClick={prevProject} aria-label="Previous Project">
            <ChevronLeft size={24} />
          </button>
          <button className="nav-btn next-btn" onClick={nextProject} aria-label="Next Project">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="dots-wrapper" role="tablist" aria-label="Project navigation dots">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              className={`dot ${index === currentProject ? 'active' : ''}`}
              aria-label={`Go to project ${index + 1}`}
              role="tab"
              aria-selected={index === currentProject}
              tabIndex={index === currentProject ? 0 : -1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSlider;
