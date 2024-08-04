import React, { useState } from 'react';

const skills = [
  { id: 1, name: 'Programming', category: 'Technical' },
  { id: 2, name: 'Data Analysis', category: 'Technical' },
  { id: 3, name: 'Public Speaking', category: 'Soft Skills' },
  { id: 4, name: 'Writing', category: 'Communication' },
  { id: 5, name: 'Project Management', category: 'Leadership' },
];

const SkillExplorer = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);

  const toggleSkill = (skill) => {
    setSelectedSkills(prevSelected =>
      prevSelected.includes(skill)
        ? prevSelected.filter(s => s !== skill)
        : [...prevSelected, skill]
    );
  };

  return (
    <div className="skill-explorer">
      <h2>Skill Explorer</h2>
      <p>Select skills you're interested in developing:</p>
      <div className="skill-grid">
        {skills.map((skill) => (
          <button
            key={skill.id}
            className={`skill-button ${selectedSkills.includes(skill) ? 'selected' : ''}`}
            onClick={() => toggleSkill(skill)}
          >
            {skill.name}
          </button>
        ))}
      </div>
      <div className="selected-skills">
        <h3>Your Selected Skills:</h3>
        <ul>
          {selectedSkills.map((skill) => (
            <li key={skill.id}>{skill.name} - {skill.category}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillExplorer;