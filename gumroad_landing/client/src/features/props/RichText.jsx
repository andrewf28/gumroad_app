import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #878787;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 24px;
  width:80vw
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #000
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

function RichText({ title, text }) {
  return (
    <Card>
      <Title>{title}</Title>
      <Divider />
      <Text>{text}</Text>
    </Card>
  );
}

export default RichText;