
import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import axios from "axios";
import "./payment.css";

export default function Payment({ paymentId, paymentReceiver, name2 }) {


  let token = localStorage.getItem("token");

  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focused, setFocused] = useState("");
  const [pay, setPay] = useState(false);


  const payNow = () => {
    let date = Date()
      .split(" GMT+0300 (Eastern European Summer Time)")[0]
      .replaceAll(" ", "-");


    axios
      .post(
        `http://localhost:5000/mypatient`,

        { id: paymentId ,
          date},
        {
          headers: {
            authorization: "Bearer " + token,
          },
        }
      )
      .then((result) => {

        console.log("payment doctor result", result.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .post(
        `http://localhost:5000/conversation`,

        { receiver_id: paymentReceiver },
        {
          headers: {
            authorization: "Bearer " + token,
          },
        }
      )
      .then((result) => {
        setPay(true);
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <div className="h4">
          <h4>inter your credit Card details to continue</h4>
        </div>
        <div className="payment-input">
          <div>
            <input
              name="number"
              placeholder="number"
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              onFocus={(e) => {
                setFocused(e.target.name);
              }}
            />
          </div>
          <div>
            <input
              name="name"
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              onFocus={(e) => {
                setFocused(e.target.name);
              }}
            />
          </div>
          <div>
            <input
              name="expiry"
              placeholder="MM/YY expiry"
              onChange={(e) => {
                setExpiry(e.target.value);
              }}
              onFocus={(e) => {
                setFocused(e.target.name);
              }}
            />
          </div>
          <div>
            <input
              name="cvc"
              placeholder="CVC"
              onChange={(e) => {
                setCvc(e.target.value);
              }}
              onFocus={(e) => {
                setFocused(e.target.name);
              }}
            />
          </div>
        </div>
        <div></div>
        <div>
          <Cards
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focused}
          />
        </div>
        <div className="button">
          {!pay ? (
            <button onClick={payNow}  className="payButton" >Confirm Payment</button>
          ) : (
            <div>Payment done</div>
          )}
        </div>
      </div>
    </>
  );
}
