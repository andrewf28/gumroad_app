import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  width: 90vw; /* Added this line */
  margin: 0 auto; /* Added this line to center the Card */
`;

const ImageContainer = styled.div`
  width: 50%;
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

function ImageComponent({ imageUrl, title, text }) {
  return (
    <Card>
      <ImageContainer>
        <Image src={imageUrl} alt={title} />
      </ImageContainer>
      <TextContainer>
        <VerticalBar />
        <Title>{title}</Title>
        <Text>{text}</Text>
      </TextContainer>
    </Card>
  );
}

export default ImageComponent;