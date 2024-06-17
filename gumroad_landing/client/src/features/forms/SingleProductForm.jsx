import React, { useState } from 'react';
import axios from 'axios';
import { Input, Textarea, Button, Stack, FormControl, FormLabel } from '@chakra-ui/react';

const API_URL = "http://127.0.0.1:3000/api/v1";

const SingleProductForm = ({ onUpload }) => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/product_components`, {
        product_component: {
          title: title,
          desc: description,
          product_id: id,
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
        <FormControl id="id">
          <FormLabel>Product ID</FormLabel>
          <Input
            type="text"
            size="lg"
            value={id}
            onChange={handleIdChange}
            placeholder="Enter product id"
            variant="filled"
            width="auto"
            
          />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Upload
        </Button>
      </Stack>
    </form>
  );
};

export default SingleProductForm;