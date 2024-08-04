import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';
import SelfReflection from './components/SelfReflection';
import SkillExplorer from './components/SkillExplorer';
import Mentorship from './components/ConnectionMentors';
import UnconventionalPaths from './components/UnderratedPaths';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navigation />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/self-reflection" element={<SelfReflection />} />
          <Route path="/skill-explorer" element={<SkillExplorer />} />
          <Route path="/connections-mentorship" element={<ConnectionMentors />} />
          <Route path="/underrated-paths" element={<UnderratedPaths />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 