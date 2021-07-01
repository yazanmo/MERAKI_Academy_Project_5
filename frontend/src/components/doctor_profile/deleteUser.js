import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setData} from "../../reducers/doctorProfile";
import { useHistory } from "react-router-dom";

const DeleteUser=()=>{

const deleteAccount=()=>{
    
}



    return<>
    <button onClick={deleteAccount}>Delete Account</button>
    </>
}

export default DeleteUser