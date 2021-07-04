import React, { useState, useEffect} from 'react';
import axios from 'axios';
import "./admin.css";
import {useHistory} from "react-router-dom"


const Accept = () => {
  const history =useHistory() 
  const [Doctor, setDoctor] = useState()
  const [info, setInfo] = useState(false);
  const [id, setId] = useState(0)




  useEffect(() => {
    axios.get(`http://localhost:5000/doctoradmin`)
      .then((response) => {
        if (info) {
          setInfo(false);
        } else {
          setInfo(true);
        }
        
        setDoctor(response.data)
        
      }).catch((err) => {
       
      })
  }, [info])

  
const deleteComment = (doctor_id)=>{
    setId(doctor_id)
    axios.put("http://localhost:5000/doctordelete",{id}).then((res)=>{
      if (info) {
        setInfo(false);
      } else {
        setInfo(true);
      }
     
    }).catch((err)=>{
      
    })
}



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
              <button onClick={()=>{history.push(`/accept/doctor/${elem.doctor_id}`)}} >accept</button>
              <button  onDoubleClick={() => console.log("on double click")} onClick={() => 
                { deleteComment(elem.doctor_id) }} >rejected</button>
               
            </div>

          </div>)
        })}
      </div>

    </>
  );
}
export default Accept