import React ,{useState }from 'react'
import { useHistory } from 'react-router';
import { createStories } from "../../reducers/story";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';


export default function CreateStories() {
    const dispatch=useDispatch()
    const history = useHistory()
    const [description, setDescription] = useState("")
    const [message, setMessage] = useState("")
    
const token = localStorage.getItem("token")
    const add =()=>{ 
        axios.post("http://localhost:5000/story",{
           description,
        },{
            headers:{
                authorization: "Bearer " + token,
            }
        })
        dispatch(createStories(description))
        setMessage("Thanks for your story")
        history.push("/profile")
    }

    return (
        <div>
            <input type="text" placeholder ="Share with us your brilliant story" onChange={(e)=>{setDescription(e.target.value)}} />
            <button onClick={add}>ADD</button>    
            <p>{message}</p>
        </div>
    )
}
