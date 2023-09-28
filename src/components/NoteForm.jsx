import React, { useState } from 'react';
import '../NoteForm.css';

const NoteForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) {
      setError('Please fill in both the title and content fields.');
      return;
    }

    setError('');

    const newNote = { title, content };
    onSubmit(newNote);
    setTitle('');
    setContent('');
  };

  return (
    <div className="note-form">
      <h2>Create a New Note</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
};

export default NoteForm;
