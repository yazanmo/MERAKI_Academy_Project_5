import React ,{useEffect} from "react";
import axios from "axios"
export default function Recipe() {


useEffect(() => {

    axios.post(`https://production.suggestic.com/graphql`, {
        headers: {
          Authorization: "2db285d971f17868cd5c29d3e42b2f88608579bd",
          "sg-user": "62a3f7d2-9bca-47e8-9a6a-b8ce97ea0005",
        },
      
      },{
        "sg-user": "62a3f7d2-9bca-47e8-9a6a-b8ce97ea0005"
      }).then((result)=>{
          console.log("API",result.data);
      }).catch((err)=>{
          console.log("API ERR",err);
      });

}, [])

 

  return <div></div>;
}
