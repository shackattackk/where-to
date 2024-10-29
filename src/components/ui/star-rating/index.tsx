import React, { useState } from "react";
import "./rating.css";

interface StarRatingProps {
  onRatingChange: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0); 

  const handleClick = (rating: number) => {
    setRating(rating);
    onRatingChange(rating);
  };

  const handleMouseEnter = (star: number) => {
    setHoverRating(star);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div className="star-rating flex gap-4">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${
            star <= (hoverRating || rating) ? "star-filled" : "star-empty"
          }`}
          onClick={() => handleClick(star)}
          onMouseEnter={() => handleMouseEnter(star)}
          onMouseLeave={handleMouseLeave}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
