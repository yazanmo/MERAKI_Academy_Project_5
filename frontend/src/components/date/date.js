import React, { useState, useEffect } from "react";
import axios from "axios";
import "./date.css";


const Date = () => {
 const token = localStorage.getItem("token");
  const [Date, setDate] = useState();
 
  useEffect(() => {
    axios
      .get(`http://localhost:5000/schedule`,
      
      {
        headers: {
          authorization: "Bearer " + token,
        },
      }
  
      )
      .then((response) => {
        setDate(response.data);
      })
      
      .catch((err) => {});
  }, []);


  return (
    <>
    
      <div className="Date">
       
      </div>
    </>
  );
};
export default Date;
