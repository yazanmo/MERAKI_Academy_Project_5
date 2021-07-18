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
  console.log("dsaaaaaaaaaaaaaaaaaaaaaaaaaa", date);
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
      .get(`/patient/breakfast/${date}/${id}`)
      .then((result) => {
        setBreakfast(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [date]);
  useEffect(() => {
    axios
      .post(`/patient/lunch`, { date, id })
      .then((result) => {
        setLunch(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [date]);

  useEffect(() => {
    axios
      .post(`/patient/dinner`, { date, id })
      .then((result) => {
        setDinner(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [date]);

  useEffect(() => {
    axios
      .post(`/patient/glassesofwater`, { date, id })
      .then((result) => {
        setGlassesOfWater(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [date]);
  useEffect(() => {
    axios
      .post(`/patient/activetime`, { date, id })
      .then((result) => {
        setActiveTime(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [date]);
  useEffect(() => {
    axios
      .post(`/patient/snack`, { date, id })
      .then((result) => {
        setSnack(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [date]);

  return (
    <div className="food-background">
      <div className="food">
        <div className="input-date">
          <input
            type="date"
            class="datepicker"
            defaultValue={today}
            onChange={(e) => {
              onChange(e.target.value);
              console.log(e.target.value);
            }}
            min="2021-07-09"
          />
        </div>
        <table style={{ width: 500, marginBottom: "30px" }}>
          <thead>
            <tr style={{ textAlign: "center", fontWeight: "bold" }}>
              breakfast
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
      </div>
    </div>
  );
};
export default Patient;
