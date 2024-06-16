// CreatorLandingPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductsList from '../features/products/ProductsList';


function CreatorLanding() {
  const { creatorId } = useParams();

  return (
    <div>
      <h1>Creator Landing Page</h1>
      <ProductsList creatorId={creatorId} />
    </div>
  );
}

export default CreatorLanding;