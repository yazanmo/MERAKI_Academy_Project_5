import React, { useState} from 'react';
import axios from 'axios';
import "./admin.css";


const Admin = () => {
    const [FirstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
          password,
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
       
       
      </>
    );
  };
export default Admin