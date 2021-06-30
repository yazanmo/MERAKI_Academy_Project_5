import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setData} from "../../reducers/doctorProfile";
import { useHistory } from "react-router-dom";
let token = localStorage.getItem("token");
const DoctorProfile = () => {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result,setResult]=useState("")
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
        <h3>Password :</h3>
        <p>{result.password}</p>
        <h3>Price :</h3>
        <p>{result.price}</p>
        <button onClick={()=>{history.push("/editProfile")}}>edit</button>
      </div>
    </>
  );
};

export default DoctorProfile;
