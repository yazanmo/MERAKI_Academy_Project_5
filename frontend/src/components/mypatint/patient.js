import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
const Patient = () => {
  const [result, setResult] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/patient/${id}`)
      .then((result) => {
        console.log(result.data);
        setResult(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div></div>;
};

export default Patient;
