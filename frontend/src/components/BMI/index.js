import React,{useState} from "react";

export default function BMI() {
  const [weight, setWeight] = useState(1);
  const [length, setLength] = useState(1);
  const [BMI, setBMI] = useState("------");
  console.log(BMI);
  const [status, setStatus] = useState("-------")
  console.log(status);

  const calculate = () => {
    let answer = weight / (length * length);
    setBMI(answer);

    if (BMI < 18.5) {
        setStatus("underweight")
    }
    else if ( BMI < 24.9) {
        setStatus ("normal")
    }
    else{
        setStatus("overweight") 
    }
  };

  return (
    <div>
      <input
        type="number"
        onChange={(e) => {
          setWeight(e.target.value);
        }}
        placeholder="Enter your weight in kg >>EX:65.5<< "
      />
      <input
        type="number"
        onChange={(e) => {
          setLength(e.target.value);
        }}
        placeholder="Enter your length in m >>EX:1.87<< "
      />

      <button onClick={calculate}>Calculate BMI</button>
      <div>
        {" "}
        Your Body Mass Index is <b>{BMI} kg/m</b>  <sup>2</sup>. <br></br>This is considered <b>{status}</b> {" "}
      </div>
    </div>
  );
}
