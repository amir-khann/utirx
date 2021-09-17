import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Button, Input, Typography } from "antd";
import axios from "axios";
import config from "../config";

const { Title } = Typography;

const createOptions = () => {
  return {
    style: {
      base: {
        fontSize: "20px",
        color: "#424770",
        fontFamily: "Open Sans, sans-serif",
        letterSpacing: "0.025em",
        lineHeight: "60px",
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
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState(0);
  const stripe = useStripe();
  const elements = useElements();
  const { stepOne, apiRequest } = useSelector(state => state)
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`${config.baseUrl}settings/price`);
      setPrice(data.price);
    })();
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const { error, token } = await stripe.createToken(
      elements.getElement(CardElement),
      {
        name: stepOne.name,
      }
    );
    if (error) {
      setLoading(false);
      return error;
    }
    props.incrementStep({ payment: token });
  };

  return (
    <div className="flex vh-90 card-details">
      <div className={"card responsive m-t-10-px"}>
        <Title level={2}>Card Details</Title>
        <div className="m-b-10-px">
          <label className="m-b-10-px">Name</label>
          <Input value={stepOne.name} readOnly />
        </div>
        <div className="m-b-10-px">
          <label className="m-b-10-px">DOB</label>
          <Input value={stepOne.dob} readOnly />
        </div>
        <div className="m-b-10-px">
          <label className="m-b-10-px">Pharmacy</label>
          <Input value={apiRequest.pharmacy.name} readOnly />
        </div>
        <div className="m-b-10-px">
          <label className="m-b-10-px">Prescription Free</label>
          <Input value={`$ ${price}`} readOnly />
        </div>
        {/* <Col span={24}>
          <Row>
            <label className={"label"}>Name</label>
            <Input
              placeholder={"Full Name"}
              type="text"
              onChange={(e) => changeForm(e.target.value)}
            />
          </Row>
        </Col> */}
        <CardElement options={{ ...createOptions(), hidePostalCode: true }} />
        <small className="description-message">{`* You will be charged $${price} and your credit card statement will show "OnlineUTIMeds.com LLC" as a merchant name`}</small>
        <Button
          type="primary"
          disabled={!stripe || loading }
          onClick={(event) => handleSubmit(event)}
          loading={loading}
        >
          Pay ${price}
        </Button>
      </div>
    </div>
  );
};

const Payment = (props) => {
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE);
  return (
    <div className="column">
      <div className="back-container">
        <p className="link-button" onClick={() => props.decrementStep()}>
          Go Back
        </p>
      </div>
      <Elements stripe={stripePromise}>
        <Form incrementStep={props.incrementStep}/>
      </Elements>
    </div>
  );
};

export default Payment;
