import React, { useState } from 'react';
import axios from 'axios';
import { Input, Textarea, Button, Stack, FormControl, FormLabel } from '@chakra-ui/react';

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
      <Stack spacing={3}>
        <FormControl id="title">
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            variant="filled"
          />
        </FormControl>
        <FormControl id="description">
          <FormLabel>Description</FormLabel>
          <Textarea
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            variant="filled"
          />
        </FormControl>
        <FormControl id="imageUrl">
          <FormLabel>Image URL</FormLabel>
          <Input
            type="text"
            placeholder="Enter image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            variant="filled"
          />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Upload
        </Button>
      </Stack>
    </form>
  );
}

export default ImageUploadForm;