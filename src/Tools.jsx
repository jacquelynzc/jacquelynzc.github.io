import React from "react";
import DevIcon from "devicon-react-svg";

const Tools = (props) => {
  const devIconStyle = {
    fill: "#c8b2ff",
    width: "150px",
  };

  return (
    <div className="tools-container">
      <h2>Programming Languages & Tools</h2>
      <div className="devIconbox">
        <div className="progress-container">
          <DevIcon icon="javascript" style={devIconStyle} viewBox="0 0 32 32" />
          <DevIcon icon="python" style={devIconStyle} viewBox="0 0 32 32" />
          <DevIcon icon="git" style={devIconStyle} viewBox="0 0 32 32" />
          <DevIcon icon="postgresql" style={devIconStyle} viewBox="0 0 32 32" />
          <DevIcon icon="npm" style={devIconStyle} viewBox="0 0 32 32" />
          <DevIcon icon="css3" style={devIconStyle} viewBox="0 0 32 32" />
          <DevIcon icon="html5" style={devIconStyle} viewBox="0 0 32 32" />
          <DevIcon icon="django" style={devIconStyle} viewBox="0 0 32 32" />
          <DevIcon icon="ruby" style={devIconStyle} viewBox="0 0 32 32" />
          <DevIcon icon="nodejs" style={devIconStyle} viewBox="0 0 32 32" />
          <DevIcon icon="mongodb" style={devIconStyle} viewBox="0 0 32 32" />
          <DevIcon icon="vim" style={devIconStyle} viewBox="0 0 32 32" />
          <DevIcon icon="react" style={devIconStyle} viewBox="0 0 32 32" />
          <DevIcon icon="heroku" style={devIconStyle} viewBox="0 0 32 32" />
          <DevIcon icon="wordpress" style={devIconStyle} viewBox="0 0 32 32" />
          <DevIcon icon="photoshop" style={devIconStyle} viewBox="0 0 32 32" />
        </div>
      </div>
    </div>
  );
};

export default Tools;
