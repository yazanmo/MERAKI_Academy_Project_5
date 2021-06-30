import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "./../../reducers/doctorProfile";
import { useHistory } from "react-router-dom";
let token = localStorage.getItem("token");

const UpdateDoctorProfile = () => {
  const profile = useSelector((state) => {
    return { doctor: state.doctorProfile.data };
  });
  console.log("profile", profile.doctor);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  console.log("aaaaaaaaaaaaaaaaaaaaaaaa",profile.doctor);
//   useEffect(() => {
//     axios
//       .put("http://localhost:5000/details",{ headers: {
//         authorization: "Bearer " + token,
//       },}, {
//         firstName,
//         lastName,
//         age,
//         img,
//         price,
//         email,
//         password,
//       })
//       .then((result) => {
//         // dispatch(updateData(result.data))
//         console.log("llllllllllllllll",result.data[0].firstName)
//         //setFirstName(profile.doctor.firstName);
        
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   },[]);
  useEffect(() => {
    setFirstName(profile.doctor.firstName)
  axios.put("http://localhost:5000/doctor/details", {firstName},{ headers: {
    authorization: "Bearer " + token, 
    
  },}).then((res)=>{
              dispatch(updateData(res.data))
        console.log("llllllllllllllll",res.data[0].age)
     setFirstName(profile.doctor.firstName);
  }).catch((err)=>{
      console.log(err);
  })
},[]);



  return <><div><input
  className="inputs"
  type="text"
  placeholder="firstName here"
  defaultValue={firstName}
  onChange={(e) => {
    setFirstName(e.target.value);
  }}
/>
</div></>;
};
export default UpdateDoctorProfile;
