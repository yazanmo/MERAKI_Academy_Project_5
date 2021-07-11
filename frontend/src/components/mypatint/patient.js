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
  const [date, onChange] = useState("");
  const today = Date.now();
  console.log(typeof date);
  const [totalCal, setTotalCal] = useState(0);
  console.log(date);
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
      .post(`http://localhost:5000/patient/breakfast`, { date, id })
      .then((result) => {
        setBreakfast(result.data);
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [breakfast]);
  useEffect(() => {
    axios
      .post(`http://localhost:5000/patient/lunch`, { date, id })
      .then((result) => {
        console.log(result.data);
        setLunch(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [Lunch]);

  useEffect(() => {
    axios
      .post(`http://localhost:5000/patient/dinner`, { date, id })
      .then((result) => {
        console.log(result.data);
        setDinner(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dinner]);

  useEffect(() => {
    axios
      .post(`http://localhost:5000/patient/glassesofwater`, { date, id })
      .then((result) => {
        console.log(result.data);
        setGlassesOfWater(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [glassesOfWater]);
  useEffect(() => {
    axios
      .post(`http://localhost:5000/patient/activetime`, { date, id })
      .then((result) => {
        console.log(result.data);
        setActiveTime(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [activeTime]);
  useEffect(() => {
    axios
      .post(`http://localhost:5000/patient/snack`, { date, id })
      .then((result) => {
        console.log(result.data);
        setSnack(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [snack]);
  const getData = (meal, title) => {
    return (
      <>
        <table style={{ width: 500, marginBottom: "30px" }}>
          <thead>
            <tr style={{ textAlign: "center", fontWeight: "bold" }}>{title}</tr>
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
              meal.map((element) => {
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
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </>
    );
  };
  return (
    <div className="food">
      <input
        type="date"
        class="datepicker"
        defaultValue={today}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        min="2021-07-09"
      />
      <table style={{ width: 500, marginBottom: "30px" }}>
        <thead>
          <tr style={{ textAlign: "center", fontWeight: "bold" }}>breakfast</tr>
        </thead>
        <thead>
          <tr>
            {heading.map((head) => (
              <th>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody style={{ marginBottom: "20px" }}>
          {breakfast &&
            breakfast.map((element) => {
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
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
      <table style={{ width: 500, marginBottom: "30px" }}>
        <thead>
          <tr style={{ textAlign: "center", fontWeight: "bold" }}>Lunch</tr>
        </thead>
        <thead>
          <tr>
            {heading.map((head) => (
              <th>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody style={{ marginBottom: "20px" }}>
          {Lunch &&
            Lunch.map((element) => {
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
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
      <table style={{ width: 500, marginBottom: "30px" }}>
        <thead>
          <tr style={{ textAlign: "center", fontWeight: "bold" }}>Dinner</tr>
        </thead>
        <thead>
          <tr>
            {heading.map((head) => (
              <th>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody style={{ marginBottom: "20px" }}>
          {dinner &&
            dinner.map((element) => {
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
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
      <table style={{ width: 500, marginBottom: "30px" }}>
        <thead>
          <tr style={{ textAlign: "center", fontWeight: "bold" }}>Snack</tr>
        </thead>
        <thead>
          <tr>
            {heading.map((head) => (
              <th>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody style={{ marginBottom: "20px" }}>
          {snack &&
            snack.map((element) => {
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
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
      <table style={{ width: 500, marginBottom: "30px" }}>
        <thead>
          <tr style={{ textAlign: "center", fontWeight: "bold" }}>Exercises</tr>
        </thead>
        <thead>
          <tr>
            {heading.map((head) => (
              <th>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody style={{ marginBottom: "20px" }}>
          {activeTime &&
            activeTime.map((element) => {
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
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>

      <table style={{ width: 500, marginBottom: "30px" }}>
        <thead>
          <tr style={{ textAlign: "center", fontWeight: "bold" }}>
            Glasses Of Water
          </tr>
        </thead>
        <thead>
          <tr>
            {heading.map((head) => (
              <th>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody style={{ marginBottom: "20px" }}>
          {glassesOfWater &&
            glassesOfWater.map((element) => {
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
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>

      {/* {getData(Lunch, "Lunch")}
      {getData(dinner, "Dinner")}
      {getData(snack, "Snack")}
      {getData(activeTime, "Exercises")} */}
      {/* {getData(glassesOfWater, "Glasses Of Water")}
      {totalCal}  */}
    </div>
  );
};
export default Patient;
