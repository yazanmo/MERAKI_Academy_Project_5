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
  const [sa, setSa] = useState(false);

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
        setAllComment(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sa]);

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
        console.log(err);
        setSa(true);
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
        className="input-comment"
        onChange={(e) => {
          setComment(e.target.value);
          setRating(4);
        }}
      />

      <button onClick={createComment}>ok</button>

      <div>
        <p>
          {allComment.map((element, index) => {
            return (
              <div key={index + 1}>
                <p>{element.firstName}</p>
                <p>{element.rating}</p>
                <p>{element.comment}</p>
                <button
                  key={element.id}
                  onClick={() => {
                    console.log(element.id);
                    axios
                      .delete(`http://localhost:5000/review/${element.id}`, {
                        headers: {
                          authorization: "Bearer " + token,
                        },
                      })
                      .then((res) => {
                        console.log(res);
                      })
                      .catch((err) => {});
                  }}
                >
                  delete
                </button>
                <button onClick={() => {}}>update</button>
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
