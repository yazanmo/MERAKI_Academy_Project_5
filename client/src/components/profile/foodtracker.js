import React, { useState, useEffect } from "react";
import axios from "axios";
import "./profile.css";
import Breakfast from "./breakfast";
import Lunch from "./lunch";
import Snack from "./snack";
import Dinner from "./dinner";
const FoodTracker = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [date, onChange] = useState();

  const today = new Date();

  console.log(date);
  return (
    <div class="">
      <input
        defaultValue={today}
        id="input-date"
        type="date"
        class="datepicker"
        onChange={(e) => {
          onChange(e.target.value);
        }}
        min="2021-07-09"
      />
      <Breakfast date={date} />
      <Lunch date={date} />
      <Dinner date={date} />
      <Snack date={date} />
    </div>
  );
};
export default FoodTracker;
