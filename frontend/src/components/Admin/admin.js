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
      <div className="parantDoctor">
        {Doctor && Doctor.map((elem, i) => {
          return (<div className="childDoctor" key={i} >
              
            <div className="par">
              <h2>{elem.firstName} {elem.lastName}</h2>
              <p>{elem.description}</p>
              <p>{elem.email}</p>
              <p>{elem.Qualifications}</p>
              <p>{elem.practicalExperiences}</p>
              <p>{elem.qualificationsFile}</p>
              
              <button >accept</button>
              <button >rejected</button>
            </div>

          </div>)
        })}
      </div>

    </>
  );
}
export default DoctorAdmin