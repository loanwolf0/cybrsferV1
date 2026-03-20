import React from 'react';
import './Review.css';

const Review = ({revDes,revTitle,revName}) => {
  return (
    <div className="review-card">
      <div className="review-header">
        <div className="stars">
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star-half">&#9733;</span>
        </div>
        {/* <p className="review-date">2 days ago</p> */}
      </div>
      <div className="review-content">
        <h1 className="reviewer-name">{revName}</h1>
        <p className="reviewer-role">{revTitle}</p>
        <p className="review-text">
          {revDes}
        </p>
      </div>
    </div>
  );
};

export default Review;
