import React from 'react';
import me from '../../assets/mev2.jpg'
import cyberbanner from '../../assets/cyberbanner.jpg'
import cyberbannerred from '../../assets/cyberbannerred.jpg'

function AboutPage() {
  return (
    <div className="about-page">
      <div className="profile-section" style={{ backgroundImage: `url(${cyberbannerred})` }}>
        <div className="profile-image">
          <img src={me} alt="Profile" />
        </div>
        <div className="about-text">
          <p>&#9996; "Hello There" &#9996;</p>
          <h2>John Magnuson</h2>
          <p>Full Stack Software Engineer</p>
          <p className="aboutLast">Random Information Engulfer</p>
        </div>
      </div>
      <div className="description-section" style={{ backgroundImage: `url(${cyberbanner})` }}>
        <h2  className="desc-header">Hobbies</h2>
        <p>I own two cars, which I absolutely adore. A 1992 BMW E36 325IS, and a 1992 Silvia Q's</p>
        <p>My other hobbies include:</p>
        <li>3D-Printing</li>
        <li>Video Games &#127918;</li>
        <li>&#65039; Computer Building &#128296;</li>
        <li>&#128304;Learning Japanese &#x1F38C; - どうぞ宜しく!</li>
        <li>&#128295; Custom Hardware/Software Solutions for Daily Life &#129520;</li>

      </div>
    </div>
  );
};

export default AboutPage;
