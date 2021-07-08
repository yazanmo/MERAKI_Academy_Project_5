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
    "serving",
    "sugar",
    "protein",
    "carbohydrates",
    "cholesterol",
    "fat_saturated",
    "potassium",
    "sodium",
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
  const getData = (meal, title) => {
    return (
      <>
        {/* <h1 className="center">{title}</h1> */}
        <thead>
          <tr style={{ textAlign: "center" }}>{title}</tr>
        </thead>
        <thead>
          <tr>
            {heading.map((head) => (
              <th>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody style={{ marginBottom: "20px" }}>
          {meal &&
            meal.map((element) => (
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
      </>
    );
  };
  return (
    <div className="food">
      {/* <h1 className="center">Breakfast</h1> */}

      <table style={{ width: 500 }}>
        {getData(breakfast, "Breakfast")}
        {getData(Lunch, "Lunch")}
        {getData(dinner, "Dinner")}
        {getData(snack, "Snack")}
        {getData(activeTime, "Exercises")}
        {getData(glassesOfWater, "Glasses Of Water")}
      </table>
    </div>
  );
};
// snack;
export default Patient;
