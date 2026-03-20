import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="completion-container">
      <span role="img" aria-label="Cheering Emoji" className="cheering-emoji">
        🎉
      </span>
      <h1 className="completion-text">CONGRATULATIONS!</h1>
      <p className="completion-message">You have successfully completed the internship.</p>
      <span role="img" aria-label="Cheering Emoji" className="cheering-emoji">
        🌟
      </span>
    </div>
  );
};


export default About