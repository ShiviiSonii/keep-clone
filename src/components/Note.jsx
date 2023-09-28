import React, { useState } from 'react';
import '../Note.css';

const Note = ({ note, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedContent, setEditedContent] = useState(note.content);

  const handleDelete = () => {
    onDelete(note.id);
  };

  const handleEdit = () => {
    if (isEditing) {

      const editedNote = {
        ...note,
        title: editedTitle,
        content: editedContent,
      };

      onSaveEdit(editedNote);

      setIsEditing(false);
    } else {
      
      setIsEditing(true);
    }
  };

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setEditedContent(e.target.value);
  };

    const onSaveEdit = (editedNote) => {
    console.log('Saving edited note:', editedNote);
  };

  return (
    <div className="note">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTitle}
            onChange={handleTitleChange}
            className="note-title"
          />
          <textarea
            value={editedContent}
            onChange={handleContentChange}
            className="note-content"
          />
        </div>
      ) : (
        <div>
          <h3 className="note-title">{note.title}</h3>
          <p className="note-content">{note.content}</p>
        </div>
      )}

      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
      
      <button className="edit-button" onClick={handleEdit}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </div>
  );
};

export default Note;
