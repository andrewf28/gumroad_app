import React from 'react';

function CreatorHeader({ creator }) {
  return (
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
  );
}

export default CreatorHeader;