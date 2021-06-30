import React, { useState, useEffect } from "react";
import axios from "axios";

const FoodTracker = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [sa, setSa] = useState(false);

  useEffect(() => {
    axios
      .get(`https://api.calorieninjas.com/v1/nutrition?query=${query}`, {
        headers: {
          "X-Api-Key": "Pjf0wWWm+Yr/ZE8oa23Dyg==c9VY1TVMpVLHA8Oe",
        },
        async: true,
        body: JSON.stringify("Hello from Lambda!"),
      })
      .then((res) => {
        console.log(res.data.items);
        setResult(res.data.items);
      })
      .catch((err) => {
        console.log(err);
        setSa(true);
      });
  }, []);

  // const getData = () => {
  //   {
  //     result &&
  //       result.map((element, index) => {
  //         console.log(element);

  //         return;
  //       });
  //   }
  // };
  return (
    <div>
      <input
        onChange={(e) => {
          setQuery(e.target.value);
          console.log(query);
        }}
      />

      <input
        onChange={(e) => {
          setQuery(e.target.value);
          console.log(query);
        }}
      />
      <input
        onChange={(e) => {
          setQuery(e.target.value);
          console.log(query);
        }}
      />

      <div>{/* <button onClick={getData}>okkkkkkkkkkkkkkkkkkk</button> */}</div>
    </div>
  );
};
export default FoodTracker;
