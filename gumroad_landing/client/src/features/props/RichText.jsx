import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios'; // or any other library for making API requests

const API_URL = "http://127.0.0.1:3000/api/v1";

const Card = styled.div`
  background-color: #000;
  border-radius: 8px;
  box-shadow: 0 2px 4px #ffffff;
  padding: 24px;
  width: 90vw;
  align-content:center;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #ffffff;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e0e0e0;
  margin: 16px 0;
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

function RichText({ rich_text_id }) {
  const [richText, setRichText] = useState(null);

  useEffect(() => {
    async function loadRichText() {
      console.log(API_URL);
      try {
        const richTextResponse = await fetch(`${API_URL}/rich_texts/${rich_text_id}`);
        if (richTextResponse.ok) {
          const richTextData = await richTextResponse.json();
          setRichText(richTextData);
        } else {
          throw new Error('Failed to fetch creator data');
        }
      } catch (e) {
        setError('An Error Occurred...');
        console.log('An error occurred', e);
      } finally {
        setLoading(false);
      }
    }
    loadRichText();
  }, [rich_text_id]);

  if (!richText) {
    return <div>Loading...</div>;
  }

  return (
    <Card>
      <Title>{richText.title}</Title>
      <Divider />
      <Text>{richText.description}</Text>
    </Card>
  );
}

export default RichText;