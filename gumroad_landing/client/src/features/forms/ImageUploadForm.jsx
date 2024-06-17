import React, { useState } from 'react';
import axios from 'axios';

const API_URL = "http://127.0.0.1:3000/api/v1";

function ImageUploadForm({ creatorId, onUpload }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/images`, {
        image: {
          title: title,
          description: description,
          image_url: imageUrl,
          creator_id: creatorId,
        },
      });
      onUpload(response.data);
    } catch (error) {
      console.error('Error uploading image:', error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <button type="submit">Upload</button>
    </form>
  );
}

export default ImageUploadForm;