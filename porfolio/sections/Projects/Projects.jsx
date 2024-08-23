import React from "react";
import styles from "./ProjectsStyles.module.css";
import pokedex from "../../assets/pokedex.png";
import filmnexus from "../../assets/filmnexus.png";
import spaceinvader from "../../assets/spaceinvader.png";
import ProjectCard from "../../common/ProjectsCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={pokedex}
          link="https://pokescroll.netlify.app/"
          h3="Pokescroll"
          p="Pokedex API App"
        />
        <ProjectCard
          src={filmnexus}
          link="https://film-nexus.netlify.app/"
          h3="Film Nexus"
          p="Streaming App"
        />
        <ProjectCard
          src={spaceinvader}
          link="https://vxctor11.github.io/Space_Invaders_Game/"
          h3="Space Invaders Game"
          p="Mini Game"
        />
      </div>
    </section>
  );
}

export default Projects;
