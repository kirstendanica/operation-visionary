import React, { useState } from 'react';

const SelfReflection = () => {
  const [entry, setEntry] = useState('');
  const [entries, setEntries] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (entry.trim()) {
      setEntries([...entries, { id: Date.now(), text: entry }]);
      setEntry('');
    }
  };

  return (
    <div className="self-reflection">
      <h2>Self-Reflection Journal</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="Reflect on your day, goals, or challenges..."
          rows="5"
        />
        <button type="submit">Save Entry</button>
      </form>
      <div className="journal-entries">
        <h3>Previous Entries</h3>
        {entries.map((entry) => (
          <div key={entry.id} className="journal-entry">
            <p>{entry.text}</p>
            <small>{new Date(entry.id).toLocaleString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelfReflection;