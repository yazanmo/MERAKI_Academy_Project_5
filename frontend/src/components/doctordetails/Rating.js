import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";

export default function Rating({ idProduct, thisToken, setInfo }) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  console.log(rating);
  return (
    <div>
      <div className="rating">
        {[...Array(5)].map((element, i) => {
          let ratingValue = i + 1;
          return (
            <label>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => {
                  setRating(ratingValue);
                }}
              />
            </label>
          );
        })}
      </div>
    </div>
  );
}
