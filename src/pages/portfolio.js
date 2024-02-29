import React from 'react';
import Project from '../components/project/project';
import './portfolio.css';
function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <div className="portfolio">
        <Project
          title="Project 1- GUESS Away"
          imageUrl="project1.jpg"
          deployedLink="KarenDouglas.github.io/word-guessing-game"
          githubLink="https://github.com/KarenDouglas/word-guessing-game"
        />
        <Project
          title="Project 2- Travel Babble"
          imageUrl="project2.jpg"
          deployedLink="https://travel-babble-09d9fd202520.herokuapp.com/"
          githubLink="https://github.com/pm-912/travel-planner"
        />
      </div>
    </div>
  );
}

export default Portfolio;
