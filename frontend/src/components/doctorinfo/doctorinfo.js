import React, { useState} from 'react';
import axios from 'axios';
import "./doctorinfo.css";


const Admin = () => {
    const [FirstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState("");
    const [description, setdescription] = useState("");
    const [Qualifications, setQualifications] = useState("");
    const [practicalExperiences, setpracticalExperiences] = useState("");
    const [qualificationsFile, setqualificationsFile] = useState("");
    
   
    
    const info = () => {
       
      axios
        .post("http://localhost:5000/info", {
          FirstName,
          lastName,
          age,
          email,
          description,
          Qualifications,
          practicalExperiences,
          qualificationsFile
        })
        .then((result) => {
          console.log(result.data);
        })
        .catch((err) => {
          
        });
    };
    return (
      <>
        <form >
        <input
            type="text"
            placeholder=" First Name "
            required
            onChange={(e) => {
            setFirstName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder=" Last Name "
            required
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder=" Age "
            required
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
  
          <input
            type="email"
            placeholder=" Email "
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
           <input
            type="text"
            placeholder=" description "
            required
            onChange={(e) => {
                setdescription(e.target.value);
            }}
          />
           <input
            type="text"
            placeholder=" Qualifications "
            required
            onChange={(e) => {
               setQualifications(e.target.value);
            }}
          />
           <input
            type="text"
            placeholder=" practicalExperiences "
            required
            onChange={(e) => {
              setpracticalExperiences(e.target.value);
            }}
          />
           <input
            type="text"
            placeholder=" qualificationsFile "
            required
            onChange={(e) => {
              setqualificationsFile(e.target.value);
            }}
          />
          <button onClick={info}>ok</button>
          <div className="info" ><p></p> </div>
  
        </form>
       
      </>
    );
  };
export default Admin