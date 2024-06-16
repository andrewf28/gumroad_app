

const API_URL = "http://127.0.0.1:3000/api/v1";
  // CreatorLanding.jsx
  import React, { useState, useEffect } from 'react';
  import { useParams } from 'react-router-dom';
  import ProductsList from '../features/products/ProductsList';
  import BarPlus from '../features/BarPlus';
  
  function CreatorLanding() {
    const { creatorId } = useParams();
    const [creator, setCreator] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    // useEffect hook to fetch creator information
    useEffect(() => {
      async function loadCreator() {
        console.log(API_URL);
        try {
          const creatorResponse = await fetch(`${API_URL}/creators/${creatorId}`);
          if (creatorResponse.ok) {
            const creatorData = await creatorResponse.json();
            setCreator(creatorData);
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
      loadCreator();
    }, [creatorId]);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    return (
      <div>
        <h1>{creator.name}'s Landing Page</h1>
        {/* Display other creator information */}
       
        {/* ... */}
        <BarPlus/>
  
        <ProductsList creatorId={creatorId} />

      </div>
    );
  }
  
  export default CreatorLanding;

