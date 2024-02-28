import React from 'react';
import './Project.css';

function Project({ title, imageUrl, deployedLink, githubLink }) {
  return (
    <div className="project">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p><a href={deployedLink}>KarenDouglas.github.io/word-guessing-game</a></p>
      <p><a href={githubLink}>https://github.com/KarenDouglas/word-guessing-game</a></p>
    </div>
  );
}

export default Project;
