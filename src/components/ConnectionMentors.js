import React, { useState } from 'react';

const mentors = [
  { id: 1, name: 'Alice Johnson', field: 'Technology' },
  { id: 2, name: 'Bob Smith', field: 'Entrepreneurship' },
  { id: 3, name: 'Carol Williams', field: 'Arts' },
  { id: 4, name: 'David Brown', field: 'Science' },
];

const ConnectionMentors = () => {
  const [selectedMentor, setSelectedMentor] = useState(null);

  return (
    <div className="mentorship">
      <h2>CONNECTIONS + MENTORSHIP</h2>
      <div className="mentor-list">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="mentor-card" onClick={() => setSelectedMentor(mentor)}>
            <h3>{mentor.name}</h3>
            <p>Field: {mentor.field}</p>
          </div>
        ))}
      </div>
      {selectedMentor && (
        <div className="mentor-details">
          <h3>Connect with {selectedMentor.name}</h3>
          <p>Expertise in {selectedMentor.field}</p>
          <button>Explore Mentorship Opportunities</button>
        </div>
      )}
    </div>
  );
};

export default ConnectionMentors;