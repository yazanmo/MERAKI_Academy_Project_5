import React from 'react';
import axios from "axios";
import {useParams} from "react-router-dom"
import { useState } from 'react';
import './accept.css';


export default function AcceptDoctor() {
    const {doctor_id}= useParams()
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

const add =  ()=>{
    axios.post(`http://localhost:5000/accept/doctor/${doctor_id}`,{
    doctor_id,  
    password
    })
    .then((result)=>{
      
        setMessage("added successfully")

    })
    .catch((err)=>{
       
        setMessage("not added !!")
    })


    axios.post(`http://localhost:5000/email`,{
        doctor_id,
        password
    })
        
}

    return (
        <>
        <div className="accept-body">
        <div className="yzn">
          
            <input className="inpt1" type="text" placeholder="password here"  onChange={(e)=>{setPassword(e.target.value)} }/>
            <button className="btnadd" onClick={ add }>ADD DOCTOR</button>
           
        </div>
         <p className="message">{message}</p>
         </div>
         </>
    )
}
 
