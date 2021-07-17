import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import StarRatingComponent from 'react-star-rating-component';
import axios from "axios";
const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};
export default function Rating({ idProduct, thisToken, setInfo }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  console.log(rating);
  const handleClick = (value) => {
    setRating(value);
    //console.log(currentValue)
  };
  const handleMouseOver = (newHoverValue) => {
    setHover(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHover(undefined);
  };
  return (
    <div style={styles.container}>
      <div className="rating">
        {[...Array(5)].map((element, i) => {
          let ratingValue = i ;
          return (
            <FaStar
              key={ratingValue}
              size={24}
              onClick={() => handleClick(ratingValue + 1)}
              onMouseOver={() => handleMouseOver(ratingValue + 1)}
              onMouseLeave={handleMouseLeave}
              color={
                (rating || hover) > ratingValue
                  ? colors.orange
                  : colors.grey
              }
              style={{
                marginRight: 10,
                cursor: "pointer",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "4% 0 0 7%"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  }}
