import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
const Patient = () => {
  const [breakfast, setBreakfast] = useState([]);
  const [Lunch, setLunch] = useState([]);
  const [dinner, setDinner] = useState([]);
  const [snack, setSnack] = useState([]);
  const [activeTime, setActiveTime] = useState([]);
  const [glassesOfWater, setGlassesOfWater] = useState([]);
  const { id } = useParams();
  const heading = [
    "Name",
    "calories",
    "serving_size_g",
    "sugar_g",
    "protein_g",
    "carbohydrates total g",
    "cholesterol mg",
    "fat_saturated g",
    "potassium mg",
    "sodium mg",
  ];

  useEffect(() => {
    axios
      .get(`http://localhost:5000/patient/${id}`)
      .then((result) => {
        console.log(result.data);
        setBreakfast(result.data.breakfast.result1);
        setLunch(result.data.lunch.result3);
        setDinner(result.data.dinner.result4);
        setSnack(result.data.snack.result2);
        setActiveTime(result.data.activeTime.result6);
        setGlassesOfWater(result.data.glassesOfWater.result5);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="food">
      <table style={{ width: 500 }}>
        <thead>
          <h1 className="center">breakfast</h1>

          <tr>
            {heading.map((head) => (
              <th>{head}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {breakfast &&
            breakfast.map((element) => (
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
              </tr>
            ))}
        </tbody>
        <h1 className="center">Lunch</h1>
        <thead>
          <tr>
            {heading.map((head) => (
              <th>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Lunch &&
            Lunch.map((element) => (
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
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
// snack;
export default Patient;
