import React from 'react';
import { Line } from 'rc-progress';

const Tools = () => {
  const languages = [
    { name: 'CSS', progress: 95 },
    { name: 'Django', progress: 79 },
    { name: 'Express', progress: 69 },
    { name: 'Flask', progress: 55 },
    { name: 'Git', progress: 84 },
    { name: 'HTML', progress: 100 },
    { name: 'JavaScript', progress: 70 },
    { name: 'MongoDB/NoSQL', progress: 90 },
    { name: 'Next.js', progress: 65 },    { name: 'Photoshop', progress: 85 },
    { name: 'PostgreSQL', progress: 84 },
    { name: 'Python', progress: 65 },
    { name: 'React.js', progress: 80 },
    { name: 'Ruby', progress: 55 },
  ];

  return (
    <div className="tools-container">
      <h2>Proficiency in Utilizing Tools &<br />Fluency in Programming Languages</h2>
      <div className="progress-container">
        <div className="column">
          {languages.slice(0, 6).map((language) => (
            <div className="progress-item" key={language.name}>
              <h3>{language.name}</h3>
              <Line
                percent={language.progress}
                strokeWidth={7}
                strokeColor="#c8b2ff"
              />
            </div>
          ))}
        </div>
        <div className="column">
          {languages.slice(8).map((language) => (
            <div className="progress-item" key={language.name}>
              <h3>{language.name}</h3>
              <Line
                percent={language.progress}
                strokeWidth={7}
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