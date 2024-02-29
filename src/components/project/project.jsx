import React from 'react';
import './project.css';

function Project({ title, description, imageUrl, deployedLink, githubLink }) {
  return (
    <div className="project">
      <img src={imageUrl} alt={title} />
      <div className="project-details">
        <h3>{title}</h3>
        <p>{description}</p> {}
        <div>
          <a href={deployedLink} target="_blank" rel="noopener noreferrer">Deployed Link</a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Link</a>
        </div>
      </div>
    </div>
  );
}
export default Project;
