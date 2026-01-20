import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./ChromaGrid.css";
import BodyImg1 from "../assets/BodyImg1.png";
import BodyImg2 from "../assets/BodyImg2.png";
import BodyImg4 from "../assets/BodyImg4.png";
import BodyImg5 from "../assets/BodyImg5.png";
import BodyImg7 from "../assets/BodyImg7.png";
import BodyImg8 from "../assets/BodyImg8.png";
import BodyImg9 from "../assets/BodyImg9.png";

export const ChromaGrid = ({
  items,
  className = "",
  radius = 300,
  columns = 3,
  rows = 2,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  const demo = [
    {
      image: BodyImg1,
      title: "The Hotdog Showdown Legacy of Giving Back",
      subtitle: "Club Service",
      handle: "RACIIT",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg, #4F46E5, #000)",
      url: "https://www.raciit.org/blog/the-hotdog-showdown-a-legacy-of-giving-back",
    },
    {
      image: BodyImg5,
      title: "BloX - The Ultimate Build Battle",
      subtitle: "Sport",
      handle: "RACIIT",
      borderColor: "#10B981",
      gradient: "linear-gradient(210deg, #10B981, #000)",
      url: "https://www.raciit.org/blog/blox-the-ultimate-build-battle",
    },
    {
      image: BodyImg7,
      title: "Hari Bn Ela. A Night of Laughter ",
      subtitle: "Club Service",
      handle: "RACIIT",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(165deg, #F59E0B, #000)",
      url: "https://www.raciit.org/blog/hari-bn-ela-a-night-of-laughter-surprises-and-unforgettable-moments",
    },
    {
      image: BodyImg4,
      title: "Hot Pockets",
      subtitle: "Sport",
      handle: "RACIIT",
      borderColor: "#EF4444",
      gradient: "linear-gradient(195deg, #EF4444, #000)",
      url: "https://www.raciit.org/blog/hot-pockets",
    },
    {
      image: BodyImg8,
      title: "A Thrilling Night of Horror, Romance, and Giving Back",
      subtitle: "Public Relation",
      handle: "RACIIT",
      borderColor: "#8B5CF6",
      gradient: "linear-gradient(225deg, #8B5CF6, #000)",
      url: "https://www.raciit.org/blog/sally-s-manor-2025-a-thrilling-night-of-horror-romance-and-giving-back",
    },
    {
      image: BodyImg9,
      title: "A Colorful Journey of Joy: Beaches, Mountains, and More with the Rotaract Clubs!",
      subtitle: "Club Service",
      handle: "RACIIT",
      borderColor: "#06B6D4",
      gradient: "linear-gradient(135deg, #06B6D4, #000)",
      url: "https://www.raciit.org/blog/a-colorful-journey-of-joy-beaches-mountains-and-more-with-the-rotaract-clubs",
    },
  ];
  const data = items?.length ? items : demo;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, "--x", "px");
    setY.current = gsap.quickSetter(el, "--y", "px");
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e) => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };

  const handleCardClick = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const handleCardMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={rootRef}
      className={`chroma-grid ${className}`}
      style={
        {
          "--r": `${radius}px`,
          "--cols": columns,
          "--rows": rows,
        }
      }
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {data.map((c, i) => (
        <article
          key={i}
          className="chroma-card"
          onMouseMove={handleCardMove}
          onClick={() => handleCardClick(c.url)}
          style={
            {
              "--card-border": c.borderColor || "transparent",
              "--card-gradient": c.gradient,
              cursor: c.url ? "pointer" : "default",
            }
          }
        >
          <div className="chroma-img-wrapper">
            <img src={c.image} alt={c.title} loading="lazy" />
          </div>
          <footer className="chroma-info">
            <h3 className="name">{c.title}</h3>
            {c.handle && <span className="handle">{c.handle}</span>}
            <p className="role">{c.subtitle}</p>
            {c.location && <span className="location">{c.location}</span>}
          </footer>
        </article>
      ))}
      <div className="chroma-overlay" />
      <div ref={fadeRef} className="chroma-fade" />
    </div>
  );
};

export default ChromaGrid;
