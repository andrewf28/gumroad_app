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
  const [images, setImages] = useState([]);
  const [richTexts, setRichTexts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [layoutResponse, productsResponse, imagesResponse, richTextsResponse] = await Promise.all([
          fetch(`${API_URL}/creators/${creatorId}/creator_layout`),
          fetch(`${API_URL}/creators/${creatorId}/products`),
          fetch(`${API_URL}/creators/${creatorId}/images`),
          fetch(`${API_URL}/creators/${creatorId}/rich_texts`),
        ]);

        const layoutData = await layoutResponse.json();
        const productsData = await productsResponse.json();
        const imagesData = await imagesResponse.json();
        const richTextsData = await richTextsResponse.json();

        setLayout(layoutData.layout);
        setProducts(productsData);
        setImages(imagesData);
        setRichTexts(richTextsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [creatorId])

  const renderComponent = (component, index) => {
    switch (component.type) {
      case 'image':
        const image = images.find((img) => img.id === component.image_id);
        return image ? <ImageComponent key={index} url={image.image_url} alt={image.title} /> : null;
      case 'rich_text':
        const richText = richTexts.find((rt) => rt.id === component.rich_text_id);
        return richText ? <RichText key={index} content={richText.description} /> : null;
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