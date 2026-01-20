import React, { useRef, useState, useEffect } from "react";
import "./DomeGallery.css";


import img1 from "../assets/CS.jpg";
import img2 from "../assets/comms.jpg";
import img3 from "../assets/IS.jpg";
import img4 from "../assets/PD.jpg";
import img5 from "../assets/Sports.jpg";
import img6 from "../assets/PR.jpg";
import img7 from "../assets/Digi.jpg";
import img8 from "../assets/Membership.jpg";
import img9 from "../assets/Finance.jpg";
import img10 from "../assets/Haxmas.png";

const DomeGallery = () => {
  const [rotation, setRotation] = useState({ x: -10, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastMouse, setLastMouse] = useState({ x: 0, y: 0 });
  const [selectedImage, setSelectedImage] = useState(null);

  const domeRef = useRef(null);

 
  const baseImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  const images = Array(100).fill(0).map((_, i) => baseImages[i % baseImages.length]); 

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setLastMouse({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - lastMouse.x;
    const deltaY = e.clientY - lastMouse.y;
    setRotation((prev) => ({
      x: Math.max(-90, Math.min(90, prev.x - deltaY * 0.3)),
      y: prev.y + deltaX * 0.3,
    }));
    setLastMouse({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, []);

  
  const layers = 10; 
  const perLayer = 10; 
  const radius = 300;

  let arrangedImages = [];
  let index = 0;
  for (let i = 0; i < layers; i++) {
    const theta = Math.PI * (i / (layers - 1) - 0.5); 
    for (let j = 0; j < perLayer; j++) {
      const phi = (2 * Math.PI * j) / perLayer; 
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta);
      const z = radius * Math.cos(theta) * Math.cos(phi);
      arrangedImages.push({ src: images[index % images.length], x, y, z });
      index++;
    }
  }

  return (
    <div
      className="dome-container"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
    >
      <div
        ref={domeRef}
        className="dome"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        {arrangedImages.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={`img-${i}`}
            className="dome-image"
            style={{
              transform: `translate3d(${img.x}px, ${img.y}px, ${img.z}px)`,
            }}
            onClick={() => setSelectedImage(img.src)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="popup" onClick={() => setSelectedImage(null)}>
          <div className="popup-content">
            <img src={selectedImage} alt="preview" />
          </div>
        </div>
      )}
    </div>
  );
};

export default DomeGallery;
