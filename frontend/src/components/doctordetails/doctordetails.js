import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import the actions
import { createTodo, setTodos } from "./../../reducers/review";

const DoctorDetails = () => {
  const { id } = useParams();
  const history = useHistory();

  const [result, setResult] = useState([]);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [allComment, setAllComment] = useState([]);

  const token = localStorage.getItem("token");
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
        // console.log(result.data);
        setAllComment(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
        // console.log(result.data);
        dispatch(createTodo(result.data));
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="doctor">
      <div className="img">
        <img src={result.img} />
      </div>
      <div className="doctor-details">
        <p>
          Dr {result.firstName} {result.lastName}
        </p>
        <p>{result.description}</p>
        <p>{result.price}</p>
        <p>{result.Qualifications}</p>
        <p>{result.practicalExperiences}</p>
      </div>

      <input
        onChange={(e) => {
          setComment(e.target.value);
          setRating(4);
        }}
      />

      <button onClick={createComment}>ok</button>

      <div>
        <p>{state.id}</p>
        <p>
          {allComment.map((element, index) => {
            // console.log(element);

            return (
              <div>
                <p>{element.firstName}</p>
                <p>{element.comment}</p>
              </div>
            );
          })}
        </p>

        <button
          onClick={() => {
            history.push(`./${id}/payment`);
          }}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default DoctorDetails;
