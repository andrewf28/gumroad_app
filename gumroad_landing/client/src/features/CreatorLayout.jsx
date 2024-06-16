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
  const [products, setProducts] = useState([]);

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

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(`${API_URL}/creators/${creatorId}/products`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, [creatorId]);

  const renderComponent = (component, index) => {
    switch (component.type) {
      case 'image':
        return <ImageComponent key={index} url={component.props.url} alt={component.props.alt} />;
      case 'rich_text':
        return <RichText key={index} content={component.props.content} />;
      case 'products':
        return <ProductsList key={index} products={products} />;
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
        <React.Fragment key={index}>
          {renderComponent(component, index)}
          {renderBarPlus(index)}
        </React.Fragment>
      ))}
    </Container>
  );
}

export default CreatorLayout;