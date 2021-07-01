import React, { useState, useEffect } from "react";
import axios from "axios";

const Snack = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [infoFood, setInfoFood] = useState(false);
  const [getBreakfast, setGetBreakfast] = useState([]);
  const token = localStorage.getItem("token");
  //   console.log("getBreakfast", getBreakfast);
  useEffect(() => {
    axios
      .get("http://localhost:5000/breakfast", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setGetBreakfast(res.data);
      })
      .catch((err) => {});
  }, [getBreakfast]);

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
          id="input-breakfast"
          onChange={(e) => {
            console.log(query);
            console.log(result);
            setQuery(e.target.value);
          }}
        />

        {result &&
          result.map((elem, i) => {
            let name = elem.name;
            return (
              <div
                className="desc-food-tracker"
                key={i}
                onClick={() => {
                  axios
                    .post(
                      `http://localhost:5000/breakfast`,
                      { name },
                      {
                        headers: {
                          authorization: "Bearer " + token,
                        },
                      }
                    )
                    .then((res) => {
                      setResult([]);
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                  document.getElementById("input-breakfast").value = "";
                }}
              >
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
            );
          })}
      </form>
      {getBreakfast.map((element, index) => {
        const id = element.breakfast_id;
        // console.log("element", breakfast_id);
        return (
          <div
            id={element.breakfast_id}
            onClick={() => {
              axios
                .delete(
                  "http://localhost:5000/breakfast",
                  {
                    headers: {
                      authorization: "Bearer " + token,
                    },
                  },
                  { id }
                )
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => {});
            }}
            key={index + 1}
            class="desc-food-tracker"
          >
            {index + 1} {element.breakfast}
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Snack;
