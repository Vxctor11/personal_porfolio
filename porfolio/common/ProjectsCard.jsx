import React from "react";

function ProjectsCard({ src, link, h3, p }) {
  return (
    <div>
      <a href="https://pokescroll.netlify.app/" target="_black">
        <img src={src} alt={`${h3} logo`} />
        <h3>{h3}</h3>
        <p>{p}</p>
      </a>
    </div>
  );
}

export default ProjectsCard;
