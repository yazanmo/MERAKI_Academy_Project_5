import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import jwt from "jsonwebtoken";
import { useEffect, useState } from "react";
import "./navigation.css";

import {  animateScroll as scroll } from "react-scroll";
import { Dropdown } from 'react-bootstrap';
require("dotenv").config();
const Navigation = ({ setHomePageSection }) => {
  const state = useSelector((state) => {
    return { token: state.login.token };
  });
  let token = localStorage.getItem("token");
  let role_id = localStorage.getItem("role_id");
  return (
    <div className="navBar">
      <div className="logo">
        <img className="logo-img" src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p206x206/217398588_274440084481758_4295520530263010685_n.png?_nc_cat=109&ccb=1-3&_nc_sid=aee45a&_nc_eui2=AeE4JcWp5f0sCwyUwvhC5TcF3O45NGlGr_Tc7jk0aUav9D63fij_Fl87u8UQa1xtq1QZZVQBPyfCeK2Kwy7psgl7&_nc_ohc=wdAT1sRUnqwAX8x-h_s&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=42cba1610e1464757ea9a4e462fe8fc9&oe=60F1F5B9"/>
      </div>
      <div className="nav">
        <ul>
          {role_id == 3 ? (
            <></>
          ) : (
            <>
              <li>
                {" "}
                <Link to="/" className="links">
                  Home
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/doctor" className="links">
                  Our nutritionist
                </Link>{" "}
              </li>
            </>
          )}
          {token ? (
            <>
              {role_id == 1 ? (
                <>
                  <li>
                    {" "}
                    <Link to="/mydoctor" className="links">
                      My Doctor
                    </Link>{" "}
                  </li>
                  <Dropdown>

                    <Dropdown.Toggle
                      className="dropdown"
                      variant="success"
                      id="dropdown-basic"
                      style={{
                        backgroundColor: "#33383B",
                        borderColor: "#33383B",
                        marginTop: "-5px",
                        fontWeight: "700",
                      }}
                    >
                      Profile
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="/create/stories">
                        Your story
                      </Dropdown.Item>
                      <Dropdown.Item href="/foodtracker">
                        Your Food
                      </Dropdown.Item>
                      <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                      <Dropdown.Item
                        href="/"
                        onClick={() => {
                          localStorage.clear();
                        }}
                      >
                        Log out
                      </Dropdown.Item>

                    </Dropdown.Menu>
                  </Dropdown>
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <>
              <li>
                {" "}
                <Link to="/logIn" className="links">
                  Log in
                </Link>{" "}
              </li>
            </>
          )}
          {token ? (
            <>
              {role_id == 2 ? (
                <>
                  <li>
                    <Link to="/mypatient" className="links">
                      My patient
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/booking" className="links">
                      Booking schedule
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/doctorProfile" className="links">
                      Profile
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link
                      to="/"
                      className="links"
                      onClick={() => {
                        localStorage.clear();
                      }}
                    >
                      Log out
                    </Link>{" "}
                  </li>
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )}
          {token ? (
            <>
              {role_id == 3 ? (
                <>
                  <li>
                    {" "}
                    <Link to="/accept" className="links">
                      Accept doctor
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/doctor" className="links">
                    nutritionist
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link
                      to="/"
                      className="links"
                      onClick={() => {
                        localStorage.clear();
                      }}
                    >
                      Log out
                    </Link>{" "}
                  </li>
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </div>
  );
};
export default Navigation;
