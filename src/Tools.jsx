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
      <div>
        <div className="progress-container">
          <DevIcon className='icon'  icon="javascript" style={devIconStyle} viewBox="0 0 32 32" />
          <DevIcon className='icon'  icon="python" style={devIconStyle} viewBox="0 0 32 32" />
          <DevIcon className='icon'  icon="git" style={devIconStyle} viewBox="0 0 32 32" />
          <DevIcon className='icon'  icon="postgresql" style={devIconStyle} viewBox="0 0 32 32" />
          <DevIcon className='icon'  icon="npm" style={devIconStyle} viewBox="0 0 32 32" />
          <DevIcon className='icon'  icon="css3" style={devIconStyle} viewBox="0 0 32 32" />
          <DevIcon className='icon'  icon="html5" style={devIconStyle} viewBox="0 0 32 32" />
          <DevIcon className='icon'  icon="django" style={devIconStyle} viewBox="0 0 32 32" />
          <DevIcon className='icon'  icon="ruby" style={devIconStyle} viewBox="0 0 32 32" />
          <DevIcon className='icon'  icon="nodejs" style={devIconStyle} viewBox="0 0 32 32" />
          <DevIcon className='icon'  icon="mongodb" style={devIconStyle} viewBox="0 0 32 32" />
          <DevIcon className='icon'  icon="vim" style={devIconStyle} viewBox="0 0 32 32" />
          <DevIcon className='icon'  icon="react" style={devIconStyle} viewBox="0 0 32 32" />
          <DevIcon className='icon'  icon="heroku" style={devIconStyle} viewBox="0 0 32 32" />
          <DevIcon className='icon'  icon="wordpress" style={devIconStyle} viewBox="0 0 32 32" />
          <DevIcon className='icon' icon="photoshop" style={devIconStyle} viewBox="0 0 32 32" />
        </div>
        {/* <div className="progress-container-mobile">
          <DevIcon icon="javascript" style={devIconStyle} viewBox="0 0 64 64" />
          <DevIcon icon="python" style={devIconStyle} viewBox="0 0 64 64" />
          <DevIcon icon="git" style={devIconStyle} viewBox="0 0 64 64" />
          <DevIcon icon="postgresql" style={devIconStyle} viewBox="0 0 64 64" />
          <DevIcon icon="npm" style={devIconStyle} viewBox="0 0 64 64" />
          <DevIcon icon="css3" style={devIconStyle} viewBox="0 0 64 64" />
          <DevIcon icon="html5" style={devIconStyle} viewBox="0 0 64 64" />
          <DevIcon icon="django" style={devIconStyle} viewBox="0 0 64 64" />
          <DevIcon icon="ruby" style={devIconStyle} viewBox="0 0 64 64" />
          <DevIcon icon="nodejs" style={devIconStyle} viewBox="0 0 64 64" />
          <DevIcon icon="mongodb" style={devIconStyle} viewBox="0 0 64 64" />
          <DevIcon icon="vim" style={devIconStyle} viewBox="0 0 64 64" />
          <DevIcon icon="react" style={devIconStyle} viewBox="0 0 64 64" />
          <DevIcon icon="heroku" style={devIconStyle} viewBox="0 0 64 64" />
          <DevIcon icon="wordpress" style={devIconStyle} viewBox="0 0 64 64" />
          <DevIcon icon="photoshop" style={devIconStyle} viewBox="0 0 64 64" />
        </div> */}
      </div>
    </div>
  );
};

export default Tools;
