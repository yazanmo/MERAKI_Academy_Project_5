import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51JDr7tFxPI6jpzoW1OxCqS7CHWXJL4B9yNCFvR0Nw01WSM4LYDZEqzDiwvBRzNaYzBVle2Roq53fqAwCNyNNbiJQ00a5jVaV0h"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}