import React ,{useState }from 'react'
import { createStories } from "../../reducers/story";
import { useDispatch, useSelector } from "react-redux";


export default function CreateStories() {
    const dispatch=useDispatch()
    const [story, setStory] = useState("")


    return (
        <div>
            <input type="text" placeholder ="Share with us your brilliant story" onChange={(e)=>{setStory(e.target.value)}} />
            <button onClick={()=>{ dispatch(createStories(story))}}>ADD</button>    
        </div>
    )
}
