import React from 'react';
import './resume.css';
function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <h3>Below is a download for my resume.</h3>
      <p><a href="/path/to/resume.pdf" download>Download Resume (PDF)</a></p>
    </div>
  );
}

export default Resume;
