// CreatorLanding.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import CreatorHeader from '../features/CreatorHeader';
import './css/CreatorLanding.css';
import CreatorLayout from '../features/CreatorLayout';

const API_URL = "http://127.0.0.1:3000/api/v1";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledCreatorHeader = styled(CreatorHeader)`
  position: sticky;
  top: 0;
  z-index: 2;
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  padding: 20px;
  position: relative;
  z-index: 1;
`;

function CreatorLanding() {
  const { creatorId } = useParams();
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <Container>
      <StyledCreatorHeader creator={creator} />
      <ContentWrapper>
        <CreatorLayout creatorId={creatorId} />
      </ContentWrapper>
    </Container>
  );
}

export default CreatorLanding;