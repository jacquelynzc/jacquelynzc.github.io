import React from 'react';
import { Line } from 'rc-progress';

const Tools = () => {
  const languages = [
    { name: 'JavaScript', progress: 65 },
    { name: 'Python', progress: 65 },
    { name: 'CSS', progress: 95 },
    { name: 'ReactJS', progress: 80 },
    { name: 'NextJS', progress: 65 },
    { name: 'MongoDB/NoSQL', progress: 90 },
    { name: 'PostgreSQL', progress: 84 },
    { name: 'Github', progress: 84 },
    { name: 'Django', progress: 79 },
    { name: 'Express', progress: 69 },
    { name: 'Figma', progress: 100 },
    { name: 'HTML', progress: 100 },
  ];

  return (
    <div className="tools-container">
      <h2>Proficiency in Utilizing Tools &<br />Fluency in Programming Languages</h2>
      <div className="progress-container">
        <div className="column">
          {languages.slice(0, 5).map((language) => (
            <div className="progress-item" key={language.name}>
              <h3>{language.name}</h3>
              <Line
                percent={language.progress}
                strokeWidth={4}
                strokeColor="#c8b2ff"
              />
            </div>
          ))}
        </div>
        <div className="column">
          {languages.slice(7).map((language) => (
            <div className="progress-item" key={language.name}>
              <h3>{language.name}</h3>
              <Line
                percent={language.progress}
                strokeWidth={4}
                strokeColor="#c8b2ff"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;