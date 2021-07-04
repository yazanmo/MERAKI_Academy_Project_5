import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Rating from "./Rating";
import { createTodo, setTodos } from "./../../reducers/review";
import  "./doctordetails.css";

const DoctorDetails = () => {
  const { id } = useParams();
  const history = useHistory();

  const [result, setResult] = useState([]);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [allComment, setAllComment] = useState([]);
  const [sa, setSa] = useState(false);
  const [updateComment, setUpdateComment] = useState(false);
  const [updateText, setUpdateCommentText] = useState("");
  const [avgRating, setAvgRating] = useState(0);

  const token = localStorage.getItem("token");
  const commenter_id = localStorage.getItem("user_id");
  const role_id = localStorage.getItem("role_id");

  let doctorsService_id = parseInt(id);
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      review: state.review.review,
    };
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/doctor/${id}`)
      .then((result) => {
        setResult(result.data[0]);
      })
      .catch((err) => {});
  }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/doctor/review/${id}`)
      .then((result) => {
        setAllComment(result.data);
      })
      .catch((err) => {});
  }, [sa]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/review/${id}`)
      .then((res) => {
        console.log(Math.floor(res.data[0].AverageRating));
        setAvgRating(Math.floor(res.data[0].AverageRating));
      })
      .catch((err) => {});
  });

  const createComment = () => {
    axios
      .post(
        "http://localhost:5000/doctor/review",
        {
          comment,
          rating,
          doctorsService_id,
        },

        {
          headers: {
            authorization: "Bearer " + token,
          },
        }
      )
      .then((result) => {
        dispatch(createTodo(result.data));
        if (sa) {
          setSa(false);
        } else {
          setSa(true);
        }
      })
      .catch((err) => {
        setSa(true);
      });
  };

  const updateComments = (id) => {
    axios
      .put(
        `http://localhost:5000/doctor/review/${id}`,
        {
          updateText,
          rating,
        },

        {
          headers: {
            authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        setUpdateComment(false);
        if (sa) {
          setSa(false);
        } else {
          setSa(true);
        }
      })
      .catch((err) => {});
  };

  const deleteComment = (id) => {
    axios
      .delete(`http://localhost:5000/review/${id}`, {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        if (sa) {
          setSa(false);
        } else {
          setSa(true);
        }
      })
      .catch((err) => {});
  };

  return (
    <div className="doctor">
        <link href="http://fonts.googleapis.com/css?family=Cookie" rel="stylesheet" type="text/css"></link>
        <div className="parent"> 
      <div className="img1">
        <img src={result.img} style={{ width: "300px", height: "500px" ,borderRadius: "20px" }} />
      </div>
      <div className="yazan">
      <div className="doctor-details">
        <h2> <span>Dr .</span> {result.firstName} {result.lastName}</h2><br></br>
        <p>{avgRating}</p>
        <p>{result.description}</p>
        <br></br>
        <br></br>
        <h3><span>price:</span> {result.price} jd</h3>
        <br></br>
        <br></br>
        <h3><span>Qualifications:</span> {result.Qualifications} </h3>
        <br></br>
        <br></br>
        <h3><span>practicalExperiences: </span>{result.practicalExperiences} </h3>
      </div>
      </div>
      </div>
      {token ? (
        <>
          {role_id == 2 ? ("" ) : (
            <>
              <textarea
                className="input-coment1" placeholder="Comment Here" onChange={(e) => {setComment(e.target.value); }}
                ></textarea>
              <input className="input-coment"
                 onChange={(e) => {setRating(e.target.value)}}
              />
            </>
          )}
        </>
      ) : ("")}
      {token ? (
        <>
          {" "}
          {role_id == 2 ? ("") : (<button className="btnCommant" onClick={createComment}> ok</button>)}{" "}
        </>
      ) : (
        ""
      )}

      <div>
      <div className="parent-commint">
      
          {allComment.map((element, index) => {
            return (
              <div className="cmt" key={index + 1}>
                 <img className="commenterimg"  src={element.img} style={{ width: "7.5%", height: "7.5%" ,borderRadius: "5px" }} />
                <div className="parent1-commint">
               
                <div className="commenter-details">
                
                <h3 className="commenter" >{element.firstName} {element.lastName}</h3> 
                
                </div>
                <p>{element.rating}</p>
                {updateComment == false ? (
                 

                  <p className="coment">{element.comment}</p> ) : (
                  <div>
                    {element.commenter_id == commenter_id ? (
                      <>
                        <textarea
                          onChange={(e) => {setUpdateCommentText(e.target.value);}}defaultValue={element.comment}
                        ></textarea>
                        <img onClick={() => {updateComments(element.id);}} style={{ width: "30px", height: "30px"  }} src="https://img.icons8.com/wired/50/000000/edit.png"/>
                       
                      </>) : ( "")}
                    
                  </div>
                  
                )}
                {element.commenter_id == commenter_id ? (
                  <div className="upd-delete">
                  <img onClick={() => {deleteComment(element.id);}} style={{ width: "30px", height: "30px"  }} src="https://img.icons8.com/ios/50/000000/delete-forever--v1.png"/>
                  
                    {updateComment == false ? (
                         <img onClick={() => {setUpdateComment(true);}} style={{ width: "30px", height: "30px"  }} src="https://img.icons8.com/wired/50/000000/edit.png"/>
   
                    ) : ("")}
                  </div>
                  
                ) : ("")}
                </div>
              </div>);})}
        </div>
        {token ? (
          <>
            {role_id == 2 ? ("") : (
              <button className="btn-1" onClick={() => {history.push(`./${id}/payment`);}}>  
              <span>Subscribe</span>
              </button>
            )}
          </>) : ("")}
      </div>
    </div>
  );
};

export default DoctorDetails;
