import React, { useState, useEffect } from "react";
import axios from "axios";
// import "./profile.css";
import "./../mypatint/mypatint.css";

const Breakfast = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [getBreakfast, setGetBreakfast] = useState([]);
  const [date, onChange] = useState();
  const token = localStorage.getItem("token");
  const today = new Date();
  const heading = [
    "Name",
    "calories",
    "serving",
    "sugar",
    "protein",
    "carbohydrates",
    "cholesterol",
    "fat_saturated",
    "potassium",
    "sodium",
    "",
  ];

  useEffect(() => {
    axios
      .get(`http://localhost:5000/breakfast/${date}`, {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setGetBreakfast(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [getBreakfast]);

  return (
    <div className="food">
      <table style={{ width: 500, marginBottom: "30px" }}>
        <thead>
          <tr style={{ textAlign: "center", fontWeight: "bold" }}>breakfast</tr>
          <input
            id="input-breakfast"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            placeholder="Search your food ..."
          />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              axios
                .get(
                  `https://api.calorieninjas.com/v1/nutrition?query=${query}`,
                  {
                    headers: {
                      "X-Api-Key": "Pjf0wWWm+Yr/ZE8oa23Dyg==c9VY1TVMpVLHA8Oe",
                    },
                    async: true,
                    body: JSON.stringify("Hello from Lambda!"),
                  }
                )
                .then((res) => {
                  console.log(res);
                  setResult(res.data.items);
                })
                .catch((err) => {});
            }}
          >
            <button type="submit">ok</button>

            {result &&
              result.map((elem, i) => {
                let name = elem.name;
                let calories = elem.calories;
                let carbohydrates = elem.carbohydrates_total_g;
                let cholesterol = elem.cholesterol_mg;
                let fat_saturated = elem.fat_saturated_g;
                let fiber = elem.fiber_g;
                let potassium = elem.potassium_mg;
                let protein = elem.protein_g;
                let serving = elem.serving_size_g;
                let sodium_mg = elem.sodium_mg;
                let sugar_g = elem.sugar_g;
                return (
                  <div
                    className="desc-food-tracker"
                    key={i}
                    onClick={() => {
                      axios
                        .post(
                          `http://localhost:5000/breakfast`,
                          {
                            name,
                            calories,
                            date,
                            carbohydrates,
                            cholesterol,
                            fat_saturated,
                            fiber,
                            potassium,
                            protein,
                            serving,
                            sodium_mg,
                            sugar_g,
                          },

                          {
                            headers: {
                              authorization: "Bearer " + token,
                            },
                          }
                        )
                        .then((res) => {
                          setResult([]);
                        })
                        .catch((err) => {});
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

            <div></div>
          </form>{" "}
        </thead>
        <thead>
          <tr>
            {heading.map((head) => (
              <th>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody style={{ marginBottom: "20px" }}>
          {getBreakfast &&
            getBreakfast.map((element) => {
              return (
                <>
                  <tr>
                    <th>{element.name}</th>
                    <th>{element.calories}</th>
                    <th>{element.serving_size_g}</th>
                    <th>{element.sugar_g}</th>
                    <th>{element.protein_g}</th>
                    <th>{element.carbohydrates_total_g}</th>
                    <th>{element.cholesterol_mg}</th>
                    <th>{element.fat_saturated_g}</th>
                    <th>{element.potassium_mg}</th>
                    <th>{element.sodium_mg}</th>
                    <th>
                      <img
                        src="https://img.icons8.com/flat-round/64/000000/delete-sign.png"
                        style={{ height: "20px", width: "20px" }}
                        onClick={() => {
                          axios
                            .delete(
                              `http://localhost:5000/breakfast/${element.breakfast_id}`,
                              {
                                headers: {
                                  authorization: "Bearer " + token,
                                },
                              }
                            )
                            .then((res) => {
                              console.log(res);
                            })
                            .catch((err) => {});
                        }}
                      />
                    </th>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
      <div>
        <input
          defaultValue={today}
          type="date"
          class="datepicker"
          onChange={(e) => {
            onChange(e.target.value);
          }}
          min="2021-07-09"
        />
      </div>
    </div>
  );
};

export default Breakfast;
