import React, { useState, useEffect } from "react";
import axios from "axios";
import "./profile.css";

const Lunch = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          axios
            .get(`https://api.calorieninjas.com/v1/nutrition?query=${query}`, {
              headers: {
                "X-Api-Key": "Pjf0wWWm+Yr/ZE8oa23Dyg==c9VY1TVMpVLHA8Oe",
              },
              async: true,
              body: JSON.stringify("Hello from Lambda!"),
            })
            .then((res) => {
              console.log(res);
              setResult(res.data.items);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        <input
          onChange={(e) => {
            console.log(query);
            console.log(result);
            setQuery(e.target.value);
          }}
        />

        <button type="submit">ok</button>
        {result &&
          result.map((elem, i) => {
            return (
              <div className="childDoctor" key={i}>
                <div className="par">
                  <h2>{elem.name}</h2>
                  <h2>{elem.calories}</h2>
                  <h2>{elem.carbohydrates_total_g}</h2>
                  <h2>{elem.cholesterol_mg}</h2>
                  <h2>{elem.fat_saturated_g}</h2>
                  <h2>{elem.fiber_g}</h2>
                  <h2>{elem.potassium_mg}</h2>
                  <h2>{elem.protein_g}</h2>
                  <h2>{elem.serving_size_g}</h2>
                  <h2>{elem.sodium_mg}</h2>
                  <h2>{elem.sugar_g}</h2>
                </div>
              </div>
            );
          })}
      </form>
    </div>
  );
};

export default Lunch;
