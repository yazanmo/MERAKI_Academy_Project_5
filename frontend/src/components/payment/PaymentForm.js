
import React, { useState } from "react";
import axios from "axios";
import "./payment.css";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"

export default function Payment({ paymentId, paymentReceiver, price }) {


  let token = localStorage.getItem("token");

  const [pay, setPay] = useState(false);


  const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#C4F0FF",
            color: "#fff",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "#FCE883" },
            "::placeholder": { color: "#87BBFD" }
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
        <div className="h4">
          <h4>inter your credit Card details to continue</h4>
        </div>
     

        {!success ? 
        <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button>Pay</button>
        </form>
        :
       <div>
           <h2>congrats this is the best decision of you're life</h2>
       </div> 
        }



    </>
  );
}
