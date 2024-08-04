import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="welcome">
      <h1>OPERATION:visionary</h1>
      <p>The future is in our hands. Time is inevitable - and so is <span>work</span>.</p>
      <div className="welcome-content">
        <h2>Discover <span>your</span> path</h2>
        <p>Feeling lost in your journey? You're not alone. OPERATION:visionary is here to help you explore your potential and find your distinctive path</p>
        <p>To help you uncover your strengths, passions, and potential career directions.</p>
        <Link to="/questionnaire" className="start-button">START<BR>YOUR</BR>JOURNAL</Link>
      </div>
    </div>
  );
};

export default Welcome;