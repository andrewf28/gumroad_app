import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
const API_URL = "http://127.0.0.1:3000/api/v1";


const Card = styled.div`
  background-color: #000;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 24px;
  box-shadow: 0 2px 4px #ffffff;
  display: flex;
  align-content:center;
  width: 90vw; /* Added this line */
  margin: 0 auto; /* Added this line to center the Card */
`;

const ImageContainer = styled.div`
  width: 20%;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextContainer = styled.div`
  width: 50%;
  padding: 20px;
  position: relative;
`;

const VerticalBar = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 2px;
  background-color: #e0e0e0;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 16px;
`;

function ImageComponent({ image_id }) {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadImage() {
      console.log(API_URL);
      try {
        const imageResponse = await fetch(`${API_URL}/images/${image_id}`);
        console.log(`${API_URL}/images/${image_id}`);
        if (imageResponse.ok) {
          const imageData = await imageResponse.json();
          setImage(imageData);
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
    loadImage();
  }, [image_id]);

  if (!image) {
    return <div>Loading...</div>;
  }

  return (
    <Card>
      <ImageContainer>
        <Image src={image.image_url} alt={image.title} />
      </ImageContainer>
      <TextContainer>
        <VerticalBar />
        <Title>{image.title}</Title>
        <Text>{image.description}</Text>
      </TextContainer>
    </Card>
  );
}

export default ImageComponent;