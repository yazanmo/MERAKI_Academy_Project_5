import React, { useState, useEffect } from "react";
import axios from "axios";

const FoodTracker = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  //   let result2 = JSON.stringify(result.items[0].name);
  //   console.log("ressssssssss", result2);
  localStorage.setItem("result", JSON.stringify(result));
  useEffect(() => {
    try {
      axios
        .get(`https://api.calorieninjas.com/v1/nutrition?query=${query}`, {
          headers: {
            "X-Api-Key": "BvLmBG+kd9BttcJLo+V3IQ==isUJUxgilC2yzusj",
          },
          async: true,
          body: JSON.stringify("Hello from Lambda!"),
        })
        .then((result) => {
          console.log(result.data.items[0]);
          setResult(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <div>
      <input
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <div></div>
    </div>
  );
};
export default FoodTracker;
