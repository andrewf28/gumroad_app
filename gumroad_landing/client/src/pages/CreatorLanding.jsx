import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductsList from '../features/products/ProductsList';
import BarPlus from '../features/BarPlus';
import './css/CreatorLanding.css'; // Import the CSS file for styling
const API_URL = "http://127.0.0.1:3000/api/v1"
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
      <header className="creator-header">
        <div className="creator-info">
          <div className="creator-image">
            <img src={creator.pfp} alt={creator.name} />
          </div>
          <div className="creator-details">
            <p>{creator.name}</p>
            {/* Display other creator information */}
          </div>
        </div>
        <div className="subscribe-form">
          <input type="text" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </header>
      <BarPlus />
      <ProductsList creatorId={creatorId} />
    </div>
  );
}



export default CreatorLanding;