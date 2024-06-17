// CreatorLayout.jsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ImageComponent from "./props/ImageComponent"
import RichText from './props/RichText';
import ProductsList from './products/ProductsList';
import BarPlus from './BarPlus';
import RichText2 from './props/RichText2';
import ImageUploadForm from './forms/ImageUploadForm';
import TextUploadForm from './forms/TextUploadForm';

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
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

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

  const handleAddElement = (type, index) => {
    index += 1;
    if (type === 'products') {
      setLayout((prevLayout) => [
        ...prevLayout.slice(0, index),
        { type: 'products' },
        ...prevLayout.slice(index),
      ]);
    } else if (type === 'image') {
      setLayout((prevLayout) => [
        ...prevLayout.slice(0, index),
        { type: 'image_upload_form' },
        ...prevLayout.slice(index),
      ]);
    } else if (type === 'rich_text') {
      setLayout((prevLayout) => [
        ...prevLayout.slice(0, index),
        { type: 'text_upload_form' },
        ...prevLayout.slice(index),
      ]);
    }
    setOpenDropdownIndex(null);
  };

  const renderBarPlus = (index) => {
    return (
      <BarPlus
        key={`bar-plus-${index}`}
        top={index * 20 + 10}
        onAddElement={(type) => handleAddElement(type, index)}
        index={index}
        isOpen={openDropdownIndex === index}
        onToggle={() => setOpenDropdownIndex(openDropdownIndex === index ? null : index)}
      />
    );
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
          {component.type === 'image_upload_form' && (
            <ImageUploadForm />
          )}
          {component.type === 'text_upload_form' && (
            <TextUploadForm />
          )}
          {renderBarPlus(index)}
        </React.Fragment>
      ))}
    </Container>
  );
}

export default CreatorLayout;