import React from 'react';

const stories = [
  {
    id: 1,
    name: 'Emily Chen',
    path: 'From Corporate Lawyer to Sustainable Fashion Designer',
    description: 'Emily left her high-paying job to pursue her passion for eco-friendly fashion.',
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    path: 'Self-taught Programmer to Tech Startup Founder',
    description: 'Marcus built a successful app without a formal CS degree.',
  },
  {
    id: 3,
    name: 'Sarah Kim',
    path: 'Accountant turned Travel Blogger',
    description: 'Sarah now makes a living sharing her adventures around the world.',
  },
];

const UnconventionalPaths = () => {
  return (
    <div className="unconventional-paths">
      <h2>Unconventional Paths to Success</h2>
      <div className="story-grid">
        {stories.map((story) => (
          <div key={story.id} className="story-card">
            <h3>{story.name}</h3>
            <h4>{story.path}</h4>
            <p>{story.description}</p>
            <button>Read Full Story</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnconventionalPaths;