import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { createTodo, setTodos } from "./../../reducers/review";

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
      {token ? (
        <>
          {role_id == 2 ? (
            ""
          ) : (
            <input
              className="input-comment"
              onChange={(e) => {
                setComment(e.target.value);
                setRating(4);
              }}
            />
          )}
        </>
      ) : (
        ""
      )}
      {token ? (
        <>
          {" "}
          {role_id == 2 ? (
            ""
          ) : (
            <button onClick={createComment}> ok</button>
          )}{" "}
        </>
      ) : (
        ""
      )}

      <div>
        <p>
          {allComment.map((element, index) => {
            return (
              <div key={index + 1}>
                <p>{element.firstName}</p>
                <p>{element.rating}</p>

                {updateComment == false ? (
                  <p>{element.comment}</p>
                ) : (
                  <div>
                    {element.commenter_id == commenter_id ? (
                      <>
                        <textarea
                          onChange={(e) => {
                            setUpdateCommentText(e.target.value);
                          }}
                          defaultValue={element.comment}
                        ></textarea>
                        <button
                          onClick={() => {
                            updateComments(element.id);
                          }}
                        >
                          update
                        </button>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                )}
                {element.commenter_id == commenter_id ? (
                  <>
                    <button
                      key={element.id}
                      onClick={() => {
                        deleteComment(element.id);
                      }}
                    >
                      delete
                    </button>

                    <br />

                    {updateComment == false ? (
                      <button
                        onClick={() => {
                          setUpdateComment(true);
                        }}
                      >
                        update
                      </button>
                    ) : (
                      ""
                    )}
                  </>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </p>

        {token ? (
          <>
            {role_id == 2 ? (
              ""
            ) : (
              <button
                onClick={() => {
                  history.push(`./${id}/payment`);
                }}
              >
                Subscribe
              </button>
            )}
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default DoctorDetails;
