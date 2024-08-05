import React, { useState, useEffect } from 'react';

const SelfReflection = () => {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState('');

  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];
    setEntries(storedEntries);
  }, []);

  const addEntry = (e) => {
    e.preventDefault();
    if (!newEntry.trim()) return;
    const updatedEntries = [...entries, { id: Date.now(), text: newEntry, date: new Date().toLocaleString() }];
    setEntries(updatedEntries);
    localStorage.setItem('journalEntries', JSON.stringify(updatedEntries));
    setNewEntry('');
  };

  const deleteEntry = (id) => {
    const updatedEntries = entries.filter(entry => entry.id !== id);
    setEntries(updatedEntries);
    localStorage.setItem('journalEntries', JSON.stringify(updatedEntries));
  };

  return (
    <div className="self-reflection">
      <h2>Self-Reflection Journal</h2>
      <form onSubmit={addEntry}>
        <textarea
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
          placeholder="What's on your mind?"
          rows="4"
        />
        <button type="submit">Add Entry</button>
      </form>
      <div className="journal-entries">
        {entries.map((entry) => (
          <div key={entry.id} className="journal-entry">
            <p>{entry.text}</p>
            <small>{entry.date}</small>
            <button onClick={() => deleteEntry(entry.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelfReflection;