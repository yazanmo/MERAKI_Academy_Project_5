import React, { useState } from "react";
import "./profile.css";
import Breakfast from "./breakfast";
import Lunch from "./lunch";
import Snack from "./snack";
import Dinner from "./dinner";

const FoodTracker = () => {
  const [date, onChange] = useState();
  const today = new Date();
  return (
    <div class="">
      <input
        defaultValue={today}
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
