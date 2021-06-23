import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Button } from "antd";

const createOptions = () => {
  return {
    style: {
      base: {
        fontSize: "20px",
        color: "#424770",
        fontFamily: "Open Sans, sans-serif",
        letterSpacing: "0.025em",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#c23d4b",
      },
    },
  };
};

const Form = (props) => {
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, token } = await stripe.createToken(
      elements.getElement(CardElement)
    );
    if (error) {
      return error;
    }
    props.incrementStep({ payment: token });
  };
  return (
    <div className={'card'}>
      <CardElement options={{ ...createOptions() }} />
      <Button
        type="primary"
        disabled={!stripe}
        onClick={(event) => handleSubmit(event)}
      >
        Pay
      </Button>
    </div>
  );
};

const Payment = (props) => {
  const stripePromise = loadStripe("pk_test_GGmbpC59S7YvSbhzLOUuBiV6");
  return (
    <Elements stripe={stripePromise}>
      <Form incrementStep={props.incrementStep} />
    </Elements>
  );
};

export default Payment;
