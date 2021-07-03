import React from 'react';
import axios from "axios";
import {useParams} from "react-router-dom"
import { useState } from 'react';

export default function AcceptDoctor() {
    const {doctor_id}= useParams()
    console.log(doctor_id);
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

const add =  ()=>{
    console.log("addddddddd");
    axios.post(`http://localhost:5000/accept/doctor/${doctor_id}`,{
    doctor_id,  
    password
    })
    .then((result)=>{
        console.log("front",result);
setMessage("added successfully")

    })
    .catch((err)=>{
        console.log(err);
        setMessage("not added")
    })
}

    return (
        <div>
            <p>hiiiiiiiiii</p>
            <input type="text" placeholder="password here"  onChange={(e)=>{setPassword(e.target.value)} }/>
            <button onClick={ add }>ADD DOCTOR</button>
            <p>{message}</p>
        </div>
    )
}
 
