import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import "./admin.css";


const DoctorAdmin = () => {
  const [Doctor, setDoctor] = useState()
  const [DoctorName, setRDoctorName] = useState()
  


  useEffect(() => {
    axios.get(`http://localhost:5000/doctoradmin`)
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
export default DoctorAdmin