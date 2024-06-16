// CreatorLayout.jsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ImageComponent from "./props/ImageComponent"
import RichText from './props/RichText';
import ProductsList from './products/ProductsList';
import BarPlus from './BarPlus';

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
        const response = await fetch(`/api/creators/${creatorId}/creator_layout`);
        const data = await response.json();
        setLayout(data.layout);
      } catch (error) {
        console.error('Error fetching creator layout:', error);
      }
    }

    fetchLayout();
  }, [creatorId]);

  const renderComponent = (component, index) => {
    switch (component.type) {
      case 'image':
        return <ImageComponent key={component.id} {...component.props} />;
      case 'rich_text':
        return <RichText key={component.id} {...component.props} />;
      case 'products':
        return <ProductsList key={component.id} {...component.props} />;
      default:
        return null;
    }
  };

  const renderBarPlus = (index) => {
    return <BarPlus key={`bar-plus-${index}`} top={index * 20 + 10} />; // Adjust the top value as needed
  };

  return (
    <Container>
      {layout.map((component, index) => (
        <React.Fragment key={component.id}>
          {renderComponent(component, index)}
          {renderBarPlus(index)}
        </React.Fragment>
      ))}
    </Container>
  );
}

export default CreatorLayout;