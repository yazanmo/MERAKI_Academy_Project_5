import React from 'react';
import axios from "axios";
import {useParams,useHistory} from "react-router-dom"
import { useState } from 'react';
import './accept.css';
export default function AcceptDoctor() {
    const {doctor_id}= useParams()
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const history = useHistory();

const add =  ()=>{

    axios.post(`${process.env.REACT_APP_BACKEND_SERVER}/accept/doctor/${doctor_id}`,{
    doctor_id,  
    password
    })
    .then((result)=>{
        setMessage("added successfully")

            history.push("/accept");
          
    })
    .catch((err)=>{
        setMessage("not added !!")
    })
    axios.post(`${process.env.REACT_APP_BACKEND_SERVER}/email`,{
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