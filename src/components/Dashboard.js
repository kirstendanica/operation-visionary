import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Your Personal Growth Hub</h1>
      <div className="dashboard-grid">
        <Link to="/self-reflection" className="dashboard-item">
          <h2>Self-Reflection Journal</h2>
          <p>Explore your thoughts, feelings, and aspirations through guided journaling exercises.</p>
        </Link>
        <Link to="/skill-explorer" className="dashboard-item">
          <h2>Skill Explorer</h2>
          <p>Discover and develop skills that align with your interests and the evolving job market.</p>
        </Link>
        <Link to="/connections-mentorship" className="dashboard-item">
          <h2>Connections + Mentorship</h2>
          <p>Connect with mentors from various fields to gain insights and guidance.</p>
        </Link>
        <Link to="/underrated-paths" className="dashboard-item">
          <h2>Underrated Paths</h2>
          <p>Explore success stories of individuals who found fulfillment in non-traditional careers.</p>
        </Link>
      </div>
      <div className="dashboard-summary">
        <h3>YOUR PROGRESS</h3>
        <ul>
          <li>Journal Entries: 5</li>
          <li>Skills Explored: 3</li>
          <li>Mentor Connections: 1</li>
          <li>Stories Read: 2</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;