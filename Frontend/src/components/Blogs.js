import React from "react";
import "./Blogs.css";

import Blog1 from "../assets/Blog1.jpg";
import Blog2 from "../assets/Blog2.jpg";
import Blog3 from "../assets/Blog3.jpg";

export default function Blogs() {
  return (
    <div className="blogs-section" id="blogs">
      {/* LEFT TEXT */}
      <div className="blogs-text">
        <h2 className="blogs-title">See what’s new on the RACIIT Blog!</h2>
        <p className="blogs-description">
          Explore our inspiring stories and creative initiatives from passionate
          Rotaractors at IIT. <br /> <br />
          Discover how we’re making a difference through service, innovation,
          and friendship — one impactful project at a time. <br /> <br />
          Join us as we celebrate growth, leadership, and positive change.
        </p>

        {/* Click Here*/}
        <a
          href="https://blog-site-git-main-ahils-projects-c4f544ca.vercel.app/" 
          className="blogs-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Here →
        </a>
      </div>

      <div className="blogs-images">
        <img src={Blog2} alt="Blog 2" className="blog-img blog-left" />
        <img src={Blog1} alt="Blog 1" className="blog-img blog-center" />
        <img src={Blog3} alt="Blog 3" className="blog-img blog-right" />
      </div>
    </div>
  );
}
