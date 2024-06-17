import React, { useState } from 'react';
import axios from 'axios';

const API_URL = "http://127.0.0.1:3000/api/v1";

const TextUploadForm = ({ creatorId, onUpload }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/rich_texts`, {
        rich_text: {
          title: title,
          description: description,
          creator_id: creatorId,
        },
      });
      onUpload(response.data);
    } catch (error) {
      console.error('Error uploading text:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>
      <button type="submit">Upload</button>
    </form>
  );
};

export default TextUploadForm;