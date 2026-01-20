import "./HeroStyles.css";

function Hero(props) {
  return (
    <div className={props.cName} aria-label="Hero section">
      <img alt="Hero" src={props.heroImg} />
      <div className="hero-text">
        <h1>{props.title}</h1>
        <p className="heroSlogan">{props.text}</p>
        <a href={props.url} className={props.btnClass}>
          {props.buttonText}
        </a>
      </div>
    </div>
  );
}

export default Hero;
