import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../sanityClient";
import "./CommunityService.css";
import ProjectGallery from "./ProjectGallery";
import Video from "../../assets/CS.mp4";

const CommunityService = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    client
      .fetch(
        `*[_type == "project" && avenue == "Community Service"] | order(date desc){
          title,
          description,
          banner,
          date
        }`
      )
      .then((data) => {
        console.log("COMMUNITY PROJECTS FETCHED:", data);
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("SANITY FETCH ERROR:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="community-container">
      {/* HERO VIDEO */}
      <div className="community-hero">
        <video autoPlay loop muted playsInline>
          <source src={Video} type="video/mp4" />
        </video>
        <div className="community-overlay">
          <h1>COMMUNITY SERVICE</h1>
        </div>
      </div>

      {/* PROJECTS */}
      <div className="community-projects-section">
        {loading && (
          <p style={{ color: "white", textAlign: "center" }}>
            Loading projects...
          </p>
        )}
        
        {error && (
          <p style={{ color: "red", textAlign: "center" }}>
            Error: {error}
          </p>
        )}
        
        {!loading && !error && projects.length === 0 && (
          <p style={{ color: "white", textAlign: "center" }}>
            No Community Service projects yet.
          </p>
        )}
        
        {!loading && !error && projects.length > 0 && (
          <ProjectGallery
            projects={projects.map((p) => ({
              title: p.title || "Untitled Project",
              description: p.description || "No description provided.",
              image: p.banner ? urlFor(p.banner).width(1200).url() : "/1.jpg",
            }))}
          />
        )}
      </div>
    </div>
  );
};

export default CommunityService;