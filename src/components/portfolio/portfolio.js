//import React from 'react';
import anime from '../../assets/anime.png'
import hobbybox from '../../assets/hobbybox.jpeg'
import weather from '../../assets/weather-forecast.png'
import planner from '../../assets/work-planner.png'
import yotsubaOld from '../../assets/yotsubaFirst.png'
import note from '../../assets/notetaker.png'
import final from '../../assets/final.png'
import simpfolio from '../../assets/mainpage.png'

function Project() {
  const projects = [
    {
      title: 'Simple Portfolio',
      imageSrc: simpfolio,
      deployedLink: 'https://sobewon.github.io/reaction-portfolio/',
      githubLink: 'https://github.com/sobewon/reaction-portfolio',
    },
    {
      title: 'Anime Explorer',
      imageSrc: anime,
      deployedLink: 'https://prestontravis.github.io/Anime_Explorer/',
      githubLink: 'https://github.com/prestontravis/Anime_Explorer',
    },
    {
      title: 'HobbyBox',
      imageSrc: hobbybox,
      deployedLink: 'https://hobbybox.herokuapp.com/',
      githubLink: 'https://github.com/Qaizen/hobby-box',
    },
    {
      title: 'My Very First HTML Page',
      imageSrc: yotsubaOld,
      deployedLink: 'https://sobewon.github.io/JMPortfolio/',
      githubLink: 'https://github.com/sobewon/JMPortfolio',
    },
    {
      title: 'Track Z Weather',
      imageSrc: weather,
      deployedLink: 'https://sobewon.github.io/trackZweather/',
      githubLink: 'https://github.com/sobewon/trackZweather',
    },
    {
      title: 'Daily Planner',
      imageSrc: planner,
      deployedLink: 'https://sobewon.github.io/dailyPlanner/',
      githubLink: 'https://github.com/sobewon/dailyPlanner',
    },
    {
      title: 'Note Taker',
      imageSrc: note,
      deployedLink: 'https://github.com/sobewon/NoteTaker',
      githubLink: 'https://github.com/sobewon/NoteTaker',
    },
    {
      title: 'Our Final Project',
      imageSrc: final,
      deployedLink: 'https://project3-test.herokuapp.com/',
      githubLink: 'https://github.com/Qaizen/curious-chronicles',
    },
  ];

  return (
    <div className="project-page">
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <h2>{project.title}</h2>
          <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
            <img src={project.imageSrc} alt={project.title} />
          </a>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer"> Repo Link</a>
        </div>
      ))}
    </div>
  );
};

export default Project;
