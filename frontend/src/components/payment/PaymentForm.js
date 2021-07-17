import React, { useState } from "react";
import axios from "axios";
import "./payment.css";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
export default function Payment({ paymentId, paymentReceiver, price }) {
  let token = localStorage.getItem("token");
  const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#FFCD42",
            color: "#fff",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "#F7B600" },
            "::placeholder": { color: "#F7B600" }
        },
        invalid: {
            iconColor: "#FFC7EE",
            color: "#FFC7EE"
        }
    }
}
  const payNow = () => {
    console.log("paymentId",paymentId);
    console.log("paymentReceiver",paymentReceiver);
    console.log("price",price);
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
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:5000/payment", {
                amount: price*100,
                id
            })
            if(response.data.success) {
                console.log("Successful payment")
                setSuccess(true)
            }
        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
    payNow()
}
  return (
    <>
        {!success ? 
        <form className="pay" onSubmit={handleSubmit}>
          <h3 className="h3Pay" >Enter Credit Card Details </h3>
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button className="payButton">Pay</button>
        </form>
        :
       <div className="h3Payy">
           <h3 >congrats this is the best decision of you're life</h3>
       </div> 
        }
    </>
  );
}