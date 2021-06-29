import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import jwt from "jsonwebtoken";
import { useEffect, useState } from "react";
require("dotenv").config();

const Navigation = () => {
  const state = useSelector((state) => {
    return { token: state.login.token };
  });
  let token = localStorage.getItem("token");
  const [parsedToken, setParsedToken] = useState("");
  useEffect(() => {
    if (token) {
      console.log(token);
      setParsedToken(jwt.verify(token, process.env.REACT_APP_SECRET));
    } else {
      setParsedToken({ role_id: 5 });
    }
  }, []);

  // console.log(state.token,process.env.REACT_APP_SECRET);
  // let parsedToken = jwt.verify(state.token, process.env.REACT_APP_SECRET);

  return (
    <div className="navBar">
      <Link to="/" className="links">
        Home
      </Link>
      <Link to="/" className="links">
        About
      </Link>
      <Link to="/nutrition" className="links">
        Our nutrition
      </Link>
      <Link to="/success" className="links">
        Stories
      </Link>
      <Link to="/" className="links">
        Contact Us
      </Link>

      {token ? (
        <>
          <Link to="/profile" className="links">
            Profile
          </Link>
          <Link to="/" className="links">
            Log out
          </Link>{" "}
          {parsedToken.role_id === 2 ? (
            <>
              <Link to="/messages" className="links">
                messages
              </Link>

              <Link to="/patient" className="links">
                My patient
              </Link>

              <Link to="/schedule" className="links">
                Booking schedule
              </Link>
            </>
          ) : (
            <></>
          )}{" "}
        </>
      ) : (
        <>
          <Link to="/logIn" className="links">
            Log in
          </Link>
          <Link to="/logUp" className="links">
            Log up
          </Link>{" "}
        </>
      )}
    </div>
  );
};

export default Navigation;
