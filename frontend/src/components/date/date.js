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
        {Date && Date.map((elem, i) => {
            return (
              <div className="DateAndTime" key={i}>
               
               <p>{elem.time}</p>
               <p>{elem.date}</p>
               <p>{elem.firstName}</p>
               <p>{elem.lastName}</p>

               
              </div>
            );
          })}
      </div>
    </>
  );
};
export default Date;
