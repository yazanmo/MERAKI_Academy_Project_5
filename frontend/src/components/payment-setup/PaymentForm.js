import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'
import "./paymentContainer.css"


const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

export default function PaymentForm() {
    const [success, setSuccess ] = useState(false)
    const [message, setMessage] = useState("")
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
                amount: 3000,
                id
            })

            if(response.data.success) {
                console.log("Successful payment")
                setMessage("Successful payment")
                setSuccess(true)
            }

        } catch (error) {
            console.log("Error", error)
            setMessage("the number is correct but not backend")
        }
    } else {
        console.log(error.message)
        setMessage("Your card number is invalid.")
    }
}

    return (
        <>
        {!success ? 
        <form className="zzz" onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button>Pay</button>
            <p className="message">{message}</p>
        </form>
        :
        <div>
        
        <h2>the subscribe with doctor done </h2>
        </div> 
        }
            
        </>
    )
}