import React from 'react';
import { Line } from 'rc-progress';

const Tools = () => {
  const languages = [
    { name: 'JavaScript', progress: 84 },
    { name: 'Python', progress: 88 },
    { name: 'CSS', progress: 99 },
    { name: 'ReactJS', progress: 90 },
    { name: 'NextJS', progress: 85 },
    { name: 'MongoDB/NoSQL', progress: 100 },
    { name: 'PostgreSQL', progress: 100 },
    { name: 'Github', progress: 92 },
    { name: 'Django', progress: 82 },
    { name: 'Express', progress: 84 },
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