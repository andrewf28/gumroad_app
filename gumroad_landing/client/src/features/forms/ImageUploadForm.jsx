import React, { useState } from 'react';
import axios from 'axios';

const API_URL = "http://127.0.0.1:3000/api/v1";

function ImageUploadForm({ creatorId, onUpload }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageData, setImageData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('image[title]', title);
      formData.append('image[description]', description);
      formData.append('image[image]', imageData);
      formData.append('image[creator_id]', creatorId);

      const response = await axios.post(`${API_URL}/images`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      onUpload(response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
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
      <input type="file" onChange={(e) => setImageData(e.target.files[0])} />
      <button type="submit">Upload</button>
    </form>
  );
}

export default ImageUploadForm;