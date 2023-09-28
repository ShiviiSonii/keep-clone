import React, { useState } from 'react';
import Note from './Note';
import '../NoteList.css';

const NoteList = ({ notes, onDelete, onUpdate }) => {
  const notesPerPage = 6; 
  const [currentPage, setCurrentPage] = useState(1);


  const startIndex = (currentPage - 1) * notesPerPage;
  const endIndex = startIndex + notesPerPage;
  const displayedNotes = notes.slice(startIndex, endIndex);


  const totalPages = Math.ceil(notes.length / notesPerPage);

  const handleDelete = (noteId) => {
    onDelete(noteId);
  };

  const handleUpdate = (updatedNote) => {
    onUpdate(updatedNote);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
    <div className="note-list">
      {displayedNotes.map((note) => (
        <Note key={note.id} note={note} onDelete={handleDelete} onUpdate={handleUpdate} />
      ))}
    </div>
    <div className="pagination">
    <button
      disabled={currentPage === 1}
      onClick={() => handlePageChange(currentPage - 1)}
    >
      Previous
    </button>
    <span>{currentPage}</span>
    <button
      disabled={currentPage === totalPages}
      onClick={() => handlePageChange(currentPage + 1)}
    >
      Next
    </button>
  </div>
  </>
  );
};

export default NoteList;
