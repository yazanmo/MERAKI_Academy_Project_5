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

  return (
    <div class="food-tracker">
      <table>
        <th>
          Breakfast <Breakfast />
        </th>
        <th>
          Lunch <Lunch />
        </th>
        <th>
          Snack <Snack />
        </th>
        <th>
          Dinner <Dinner />
        </th>
      </table>
    </div>
  );
};
export default FoodTracker;
