import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setData} from "../../reducers/doctorProfile";
import { useHistory } from "react-router-dom";
const DoctorProfile = () => {
  
  const history = useHistory();
  const [result,setResult]=useState("")

  let token = localStorage.getItem("token");
   
  const dispatch=useDispatch()
  localStorage.setItem("profile-data",JSON.stringify(result))

  useEffect(() => {
    axios
      .get("http://localhost:5000/doctor/details", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((result) => {        
       console.log(result.data)
        setResult(result.data[0])
        
        dispatch(setData(result.data[0]))
      })
      .catch((err) => {
        throw err;
      });
  }, []);


  return (
    <>
      <div className="profile_page">
        <h3 style={{ float: "left" }}>FirstName :</h3>
        
          <p>{result.firstName}</p>
         

        <h3>LastName :</h3>
        <p>{result.lastName}</p>

        <h3>Image :</h3>
        <p>{result.img}</p>
        <h3>Email :</h3>
        <p>{result.email}</p>
        <h3>Age :</h3>
        <p>{result.age}</p>
        <h3>Price :</h3>
        <p>{result.price}</p>
        <h3>Description :</h3>
        <p>{result.description}</p>
        <h3>Qualifications :</h3>
        <p>{result.Qualifications}</p>
        <h3>PracticalExperiences :</h3>
        <p>{result.practicalExperiences}</p>
        <button onClick={()=>{history.push("/editProfile")}}>edit</button>
      </div>
    </>
  );
};

export default DoctorProfile;
