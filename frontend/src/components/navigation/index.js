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
        <img className="logo-img" src="https://scontent.famm3-1.fna.fbcdn.net/v/t1.15752-9/217635563_1162193564273221_2538562333226498135_n.png?_nc_cat=109&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeHLB9AbtT3AuzmYxRVsD1-u03JRewQGLtTTclF7BAYu1BIct7bbJPsdF4miEofFNxJxaQzrYuIVpQ8oNhEXXJc8&_nc_ohc=RU0j3X7tMiUAX_Jtm2L&_nc_ht=scontent.famm3-1.fna&oh=801afb762b81abb4ea1a8277126694a2&oe=60F34017"/>
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
                        backgroundColor: "rgb(89 96 108)",
                        borderColor: "rgb(89 96 108)",
                        marginTop: "-8px",
                        fontWeight: "700",
                        fontSize:"20px",
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
                  <Dropdown>

          <Dropdown.Toggle
          className="dropdown"
          variant="success"
          id="dropdown-basic"
          style={{
            backgroundColor: "rgb(89 96 108)",
            borderColor: "rgb(89 96 108)",
            marginTop: "-8px",
            fontWeight: "700",
            fontSize:"20px",
          }}
          >
             z
            </Dropdown.Toggle>
            <Dropdown.Menu>

            <Dropdown.Item href="/doctorProfile">Profile</Dropdown.Item>
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
