import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import jwt from 'jsonwebtoken'
require("dotenv").config();


const Navigation = () => {
  const state = useSelector((state) => {
    return { token: state.login.token };
  });
  const parsedToken = jwt.verify(state.token, process.env.SECRET);

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
      <Link to="/" className="links">
        Stories
      </Link>
      <Link to="/" className="links">
        Contact Us
      </Link>

      {token && parsedToken.role_id == 1 ? (
        <>
          <Link to="/profile" className="links">
            Profile
          </Link>
          <Link to="/" className="links">
            Log out
          </Link>{" "}
          {token && parsedToken.role_id == 2 ? (
            <>
              <Link to="/profile" className="links">
                Profile
              </Link>
              <Link to="/" className="links">
                Log out
              </Link>

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
