import React, { useState } from 'react';
import axios from 'axios';
import { Input, Textarea, Button, Stack, FormControl, FormLabel } from '@chakra-ui/react';

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
      <Stack spacing={3}>
        <FormControl id="title">
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            size="lg"
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter title"
            variant="filled"
            width="auto"
            
          />
        </FormControl>
        <FormControl id="description">
          <FormLabel>Description</FormLabel>
          <Textarea
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Enter description"
            variant="filled"
          />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Upload
        </Button>
      </Stack>
    </form>
  );
};

export default TextUploadForm;