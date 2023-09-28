import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    const newNoteWithId = { ...newNote, id: uuidv4(), pinned: false }; 
    setNotes([...notes, newNoteWithId]);
  };

  const togglePin = (noteId) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === noteId) {
        return { ...note, pinned: !note.pinned };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  const deleteNote = (noteId) => {
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <NoteForm onSubmit={addNote} />
      </div>
      <NoteList notes={notes} onDelete={deleteNote} onPin={togglePin} />
    </div>
  );
}

export default App;
