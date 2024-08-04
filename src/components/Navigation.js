import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/" className="nav-logo">OPERATION:visionary</Link>
      <div className="nav-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/self-reflection">Self-Reflection</Link>
        <Link to="/skill-explorer">Skill Explorer</Link>
        <Link to="/connections-mentorships">Connections + Mentorship</Link>
        <Link to="/underrated-paths">Underrated Paths</Link>
      </div>
    </nav>
  );
};

export default Navigation;