import React from "react";
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import githubIcon from "../../assets/github.svg";
import likedinIcon from "../../assets/linkedin.svg";
import CV from "../../assets/VictorMOrtizResume.pdf";

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.heroImg}
          src={heroImg}
          alt="Profilr picture of Victor Ortiz"
        />
        <div className={styles.info}>
          <h1>
            Victor M <br /> Ortiz Martinez
          </h1>
          <h2>Full Stack Developer</h2>
          <span>
            <a href="https://github.com/Vxctor11" target="_black">
              <img src={githubIcon} alt="Github Icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/victormortiz11/"
              target="_black"
            >
              <img src={likedinIcon} alt="Likedin Icon" />
            </a>
          </span>
          <p className="description">
            Driven by a passion for crafting modern React web apps optimized for
            professional use.
          </p>
          <a href={CV} download>
            <button className="hover">Resume</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
