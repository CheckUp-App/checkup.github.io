import React, { useState } from 'react';
import './AppointmentNotes.css';

const AppointmentNotes = () => {
  // Predefined tags that the provider can select
  const predefinedTags = [
    'Prescription Info: Take 2 Adderall pills/day 1 in the morning and 1 at night',
    'Contact Us: 123-456-7890',
    'Follow-Up On: 12/12/2024'
  ];

  const [tags, setTags] = useState([]);
  const [notes, setNotes] = useState([]); // State for patient notes
  const [tagInput, setTagInput] = useState('');
  const [noteInput, setNoteInput] = useState('');

  const handleAddTag = (tag) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleAddNote = () => {
    if (noteInput.trim() !== '' && !notes.includes(noteInput.trim())) {
      setNotes([...notes, noteInput.trim()]);
      setNoteInput('');
    }
  };

  const handleRemoveNote = (noteToRemove) => {
    setNotes(notes.filter(note => note !== noteToRemove));
  };

  return (
    <div className="appointment-notes">
      <h2 className="header">Appointment Notes</h2>
      
      <div className="tags-selection">
        {predefinedTags.map((tag, index) => (
          <button 
            key={index} 
            className="tag-button" 
            onClick={() => handleAddTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="tags-list">
        {tags.map((tag, index) => (
          <div key={index} className="tag">
            <span>{tag}</span>
            <button onClick={() => handleRemoveTag(tag)}>Remove</button>
          </div>
        ))}
      </div>

      <div className="custom-notes">
        <h3>My Notes</h3>
        <input 
          type="text" 
          value={noteInput} 
          onChange={(e) => setNoteInput(e.target.value)} 
          placeholder="Write a note..." 
        />
        <button onClick={handleAddNote}>Add Note</button>
        <div className="notes-list">
          {notes.map((note, index) => (
            <div key={index} className="note">
              <span>{note}</span>
              <button onClick={() => handleRemoveNote(note)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppointmentNotes;

