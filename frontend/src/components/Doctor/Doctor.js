
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
      <div className="parantDoctor">
        {Doctor && Doctor.map((elem, i) => {
          return (<div className="childDoctor" key={i} >
              
            <div className="imag">
              <img src={`${elem.img}`} />
            </div>
            <div className="par">
              <h2>{elem.firstName} {elem.lastName}</h2>
              <h2>{elem.price}</h2>
              <p>{elem.description}</p>
              
             
            </div>
        
          </div>)
        })}
      </div>

    </>
  );
}
export default Doctor