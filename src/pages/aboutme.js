import React from 'react';
import './aboutme.css'; // Import CSS file for styling if needed

function AboutMe() {
  return (
    <div className="about-me">
      <h2>About Me</h2>
      <div className="bio">
        <img src="avatar.jpg" alt="Bilal Khan" className="avatar" />
        <p>
          I'm Bilal Khan, a passionate web developer with expertise in React.js. 
          I have a strong background in front-end development and enjoy creating 
          engaging user experiences. In my free time, I like to explore new technologies 
          and contribute to open-source projects.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
