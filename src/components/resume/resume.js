import React from 'react';
//import jresume from '../../assets/JohnMagnusonResumeSept'

function Resume() {
  return (
    <div className="resume-page">
      <h2>Skills</h2>
      <ul className="skills-list">
        <li>Certified Full Stack Web Developer</li>
        <li>Issue Diagnosis and Problem Resolver</li>
        <li>Management of 20+ Group Members at Events</li>
        {/* Add more skills */}
      </ul>
      <div className="resume-link">
        <a 
          href='/JohnMagnusonResumeSept.pdf'
          download='JohnMagnusonResumeSept.pdf'
          target="_blank" 
          rel="noopener noreferrer"
          className='resume-text'
          >Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
