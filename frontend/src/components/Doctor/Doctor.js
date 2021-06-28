
import React, { useState, useEffect } from 'react';
import {useHistory } from 'react-router-dom';
import axios from 'axios';
import "./Doctor.css";


const Doctor = (props) => {
  const [Doctor, setDoctor] = useState()
  const [DoctorName, setRDoctorName] = useState()
  const history = useHistory();

  
  useEffect(() => {
    axios.get(`http://localhost:5000/doctor`)
      .then((response) => {
        setDoctor(response.data)
      }).catch((err) => {
        console.log("Error")
      })
  }, [])

 
 

  return (
    <>
     

    </>
  );
}
export default Doctor