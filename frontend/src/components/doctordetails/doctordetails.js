import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Rating from "./Rating";
import Stars from "./Stars";
import { createTodo, setTodos } from "./../../reducers/review";
import { FaStar } from "react-icons/fa";

import "./doctordetails.css";
const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};
const DoctorDetails = () => {
  const { id } = useParams();
  const history = useHistory();

  const [result, setResult] = useState([]);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
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
  const handleClick = (value) => {
    setRating(value);
  };
  const handleMouseOver = (newHoverValue) => {
    setHover(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHover(undefined);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:5000/doctor/${id}`)
      .then((result) => {
        console.log(result.data[0]);
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
        setAvgRating(Math.floor(res.data[0].AverageRating));
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
      <link
        href="http://fonts.googleapis.com/css?family=Cookie"
        rel="stylesheet"
        type="text/css"
      ></link>
      <div className="name-Q">
        <p className="doc-Q">{result.Qualifications} </p>
        <p><span>Dr .</span> {result.firstName} {result.lastName}</p>
      </div>
      <div className="parent">
        <div className="img1">
          <img
            src={result.img ? result.img : <></>}
            style={{
              width: "450px",
              height: "450px",
              borderRadius: "20px",
              borderRadius: "5px",
            }}
          />
        </div>

        <div className="doctor-details">
          {/* <h2>
            {" "}
            <span>Dr .</span> {result.firstName} {result.lastName}
          </h2> */}

          <div className="avgRating">
            <Stars stars={avgRating} defaultValue={avgRating} />
          </div>
          <p>{result.description}</p>

          <p>
            <span>price:</span> {result.price} jd
          </p>

          <p>
            <span>Qualifications:</span> {result.Qualifications}{" "}
          </p>

          <p>
            <span>practicalExperiences: </span>
            {result.practicalExperiences}{" "}
          </p>
          {token ? (
            <>
              {role_id == 2 ? (
                ""
              ) : (
                <button
                  className="btn-1"
                  onClick={() => {
                    axios
                      .post(
                        `http://localhost:5000/mypatient`,

                        { id },
                        {
                          headers: {
                            authorization: "Bearer " + token,
                          },
                        }
                      )
                      .then((result) => {
                        setResult(result.data);
                        console.log(result.data);
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                    axios
                      .post(
                        `http://localhost:5000/conversation`,

                        { receiver_id: result.user_id },
                        {
                          headers: {
                            authorization: "Bearer " + token,
                          },
                        }
                      )
                      .then((result) => {
                        console.log(result.data);
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }}
                >
                  <span onClick={() => {}}>Subscribe</span>
                </button>
              )}
            </>
          ) : (
            ""
          )}
        </div>

        <link
          href="http://fonts.googleapis.com/css?family=Cookie"
          rel="stylesheet"
          type="text/css"
        ></link>
      </div>

      {token ? (
        <>
          {role_id == 2 ? (
            ""
          ) : (
            <div className="comment">
              <p className="feedBack">give us your feedBack</p>
              <div className="rating">
                <div className="rating1" style={styles.container}>
                  {[...Array(5)].map((element, i) => {
                    let ratingValue = i;
                    return (
                      <div className="rating">
                        <div>
                          <FaStar
                            style={styles.container}
                            key={ratingValue}
                            size={24}
                            onClick={() => handleClick(ratingValue + 1)}
                            onMouseOver={() => handleMouseOver(ratingValue + 1)}
                            onMouseLeave={handleMouseLeave}
                            color={
                              (rating || hover) > ratingValue
                                ? colors.orange
                                : colors.grey
                            }
                            style={{
                              fontSize: 50,
                              marginRight: 10,
                              cursor: "pointer",
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <textarea
                className="input-coment1"
                placeholder="  Comment Here ...."
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              ></textarea>
            </div>
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
            <button className="btnCommant" onClick={createComment}>
              {" "}
              comment
            </button>
          )}{" "}
        </>
      ) : (
        ""
      )}

      <div>
        <div className="parent-commint">
          <p className="Reviews">Reviews :</p>
          {allComment.map((element, index) => {
            return (
              <div className="cmt" key={index + 1}>
                <hr />
                <div className="userImg">
                  <img
                    className="commenterimg"
                    src={element.img}
                    style={{
                      width: "75px",
                      height: "75px",
                      borderRadius: "5px",
                    }}
                  />

                  <div className="commenter-details">
                    <h3 className="commenter">
                      {element.firstName} {element.lastName}
                    </h3>
                    <div className="commentRating">
                      <Stars
                        stars={element.rating}
                        defaultValue={element.rating}
                      />
                    </div>

                    {updateComment == false ? (
                      <p className="comments">{element.comment}</p>
                    ) : (
                      <div>
                        {element.commenter_id == commenter_id ? (
                          <>
                            <textarea
                              className="input-text"
                              onChange={(e) => {
                                setUpdateCommentText(e.target.value);
                              }}
                              defaultValue={element.comment}
                            ></textarea>
                            <img
                              onClick={() => {
                                updateComments(element.id);
                              }}
                              style={{ width: "30px", height: "30px" }}
                              src="https://img.icons8.com/wired/50/000000/edit.png"
                            />
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                    )}
                  </div>
                  <div className="update_delete ">
                    {element.commenter_id == commenter_id ? (
                      <div className="upd-delete">
                        <img
                          onClick={() => {
                            deleteComment(element.id);
                          }}
                          style={{ width: "30px", height: "30px" }}
                          src="https://img.icons8.com/ios/50/000000/delete-forever--v1.png"
                        />

                        {updateComment == false ? (
                          <img
                            onClick={() => {
                              setUpdateComment(true);
                            }}
                            style={{ width: "30px", height: "30px" }}
                            src="https://img.icons8.com/wired/50/000000/edit.png"
                          />
                        ) : (
                          ""
                        )}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "5% 0 0 6%",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
};
export default DoctorDetails;
