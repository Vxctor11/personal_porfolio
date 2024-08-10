import React from "react";
import styles from "./ProjectsStyles.module.css";
import pokeball from "../../assets/pokeball.png";
import filmnexus from "../../assets/filmnexus.png";
import ProjectCard from "../../common/ProjectsCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={pokeball}
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
      </div>
    </section>
  );
}

export default Projects;
