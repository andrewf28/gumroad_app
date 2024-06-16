// CreatorLayout.jsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ImageComponent from "./props/ImageComponent"
import RichText from './props/RichText';
import ProductsList from './products/ProductsList';
import BarPlus from './BarPlus';

const API_URL = "http://127.0.0.1:3000/api/v1";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  position: relative;

  & > * {
    margin-bottom: 20px;
    width: 100%;
  }
`;

function CreatorLayout({ creatorId }) {
  const [layout, setLayout] = useState([]);

  useEffect(() => {
    async function fetchLayout() {
      try {
        const response = await fetch(`${API_URL}/creators/${creatorId}/creator_layout`);
        const data = await response.json();
        setLayout(data.layout);
      } catch (error) {
        console.error('Error fetching creator layout:', error);
      }
    }

    fetchLayout();
  }, [creatorId]);

  const renderBarPlus = (index) => {
    return <BarPlus key={`bar-plus-${index}`} top={index * 20 + 10} />; // Adjust the top value as needed
  };

  return (
    <Container>
      {layout.map((component, index) => (
        <React.Fragment key={index}>
          {component.type === 'image' && (
            <ImageComponent image_id={component.image_id} />
          )}
          {component.type === 'rich_text' && (
            <RichText rich_text_id={component.rich_text_id} />
          )}
          {component.type === 'products' && (
            <ProductsList creatorId={creatorId} />
          )}
          {renderBarPlus(index)}
        </React.Fragment>
      ))}
    </Container>
  );
}

export default CreatorLayout;