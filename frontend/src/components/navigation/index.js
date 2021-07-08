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
        <h3>
          HEALTH<span>CARE</span>
        </h3>
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
                <Link to="/about" className="links">
                  About
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/doctor" className="links">
                  Our nutritionist
                </Link>{" "}
              </li>
              <li>
                <Link
                  to="/"
                  className="links"
                  onClick={() => {
                    setHomePageSection("services");
                  }}
                >
                  Services
                </Link>{" "}
              </li>
              <li>
                <Link
                  to="/"
                  className="links"
                  onClick={() => {
                    setHomePageSection("stories");
                  }}
                >
                  Stories
                </Link>{" "}
              </li>
              <li>
                {" "}
                <Link
                  to="/"
                  className="links"
                  onClick={() => {
                    setHomePageSection("contact");
                  }}
                >
                  Contact Us
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
                    {" "}
                    <Link to="/messages" className="links">
                      messages
                    </Link>{" "}
                  </li>
                  <li>
                    <Link to="/mypatient" className="links">
                      My patient
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/schedule" className="links">
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
                    <Link to="/adminPage" className="links">
                      Admin profile
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
