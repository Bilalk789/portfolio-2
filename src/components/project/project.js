import React from 'react';
import './project.css';

function Project({ title, imageUrl, deployedLink, githubLink }) {
  return (
    <div className="project">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p><a href={deployedLink}>deployedLink</a></p>
      <p><a href={githubLink}>githubLink</a></p>
    </div>
  );
}
export default Project;
