import React, { useState } from "react";
import "./BMI.css";

export default function BMI() {
  const [weight, setWeight] = useState(1);
  const [length, setLength] = useState(1);
  const [BMI, setBMI] = useState("------");
  const [status, setStatus] = useState("------");

  const [age, setAge] = useState(1);
  const [gender, setGender] = useState("");
  const [cal, setCal] = useState("------");

  const [BMR, setBMR] = useState("------");

  //CALCULATE BMI
  const calculate = () => {
    let answer = weight / (length * length);
    let finalAnswer = Math.round(answer * 100) / 100;
    setBMI(finalAnswer);

    if (BMI < 18.5) {
      setStatus("underweight");
    } else if (BMI < 24.9) {
      setStatus("normal");
    } else {
      setStatus("overweight");
    }
  };

  //CALCULATE BMR
  const calculateBMR = () => {
    let Gender = gender.toLowerCase();
    if (Gender === "male") {
      let answer =
        88.362 + 13.397 * weight + 4.799 * length * 100 - 5.677 * age;
      let finalAnswer = Math.round(answer * 100) / 100;
      setBMR(finalAnswer);
    }

    if (Gender === "female") {
      let answer = 447.593 + 9.247 * weight + 3.098 * length * 100 - 4.33 * age;
      let finalAnswer = Math.round(answer * 100) / 100;
      setBMR(finalAnswer);
    }
  };

  //CALCULATE CALORIE
  const calculateCal = () => {
    let Gender = gender.toLowerCase();
    if (Gender === "male") {
      let answer =
        (88.362 + 13.397 * weight + 4.799 * length * 100 - 5.677 * age) * 1.2;
      let finalAnswer = Math.round(answer * 100) / 100;
      setCal(finalAnswer);
    }

    if (Gender === "female") {
      let answer =
        (447.593 + 9.247 * weight + 3.098 * length * 100 - 4.33 * age) * 1.2;
      let finalAnswer = Math.round(answer * 100) / 100;
      setCal(finalAnswer);
    }
  };

  return (
    <div className="BMI">
      <h2>Calculate your Body Mass Index</h2>
      <div className="WH">
        <label>Weight</label>
        <input
          type="number"
          onChange={(e) => {
            setWeight(e.target.value);
          }}
          placeholder="  EX : 65.5 kg "
        />
      </div>
      <div className="WH">
        <label>Height</label>
        <input
          type="number"
          onChange={(e) => {
            setLength(e.target.value);
          }}
          placeholder="  Ex : 1.87 m "
        />
      </div>

      <div className="WH">
        <label>Age</label>
        <input
          type="number"
          onChange={(e) => {
            setAge(e.target.value);
          }}
          placeholder="  EX :20 "
        />
      </div>

      <div className="WH">
        <label>Gender</label>
        <input
          type="text"
          onChange={(e) => {
            setGender(e.target.value);
          }}
          placeholder=" male or female "
        />
      </div>
      <button className="bmiButton" onClick={calculate}>
        Calculate BMI
      </button>
      <button className="bmiButton" onClick={calculateBMR}>
        Calculate BMR
      </button>
      <button className="bmiButton" onClick={calculateCal}>
        Calorie need per day
      </button>
      <div>
        {" "}
        Your Body Mass Index is <b>{BMI} kg/m</b> <sup>2</sup>. <br></br>This is
        considered <b>{status}</b>{" "}
      </div>
      <div>
        {" "}
        You need <b>{cal}</b> per day
      </div>
      <div>
        {" "}
        Your Basal metabolic rate
        <b>{BMR} </b>{" "}
      </div>
      
    </div>
  );
}
