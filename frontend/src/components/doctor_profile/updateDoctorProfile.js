import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setData} from "../../reducers/doctorProfile";
import { useHistory } from "react-router-dom";
let token = localStorage.getItem("token");

const updateDoctorProfile=()=>{
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [img, setImg] = useState("");
    const [price, setPrice] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch=useDispatch()

    
return
}
export default updateDoctorProfile