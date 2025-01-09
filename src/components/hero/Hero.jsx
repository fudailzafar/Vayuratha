import "./Hero.css";
import arrow_btn from "../../assets/arrow_btn.png";
import play_icon from "../../assets/play_icon.png";
import pause_icon from "../../assets/pause_icon.png";

const Hero = ({ className, heroData, setHeroCount, heroCount }) => {
  return (
    <div className="hero">
      <div className={`${className}`}>
        <div className={`hero-text ${className}`}>
          <p>{heroData.text1}</p>
          <p>{heroData.text2}</p>
        </div>
        <div className="hero-explore">
          <p>Explore our products</p>
          <img src={arrow_btn} alt="" />
        </div>
      </div>

      <div className="hero-dot-play">
        <ul className={`hero-dots ${className}`}>
          <li
            onClick={() => setHeroCount(0)}
            className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(1)}
            className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(2)}
            className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}
          ></li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
