import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Button, Col, Row, Input, Typography } from "antd";
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
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const stripe = useStripe();
  const elements = useElements();
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
        name,
      }
    );
    if (error) {
      setLoading(false);
      return error;
    }
    props.incrementStep({ payment: token });
  };

  const changeForm = (value) => {
    setName(value);
  };
  return (
    <div className="flex vh-90 card-details">
      <div className={"card responsive m-t-10-p"}>
        <Title level={2}>Card Details</Title>
        <Col span={24}>
          <Row>
            <label className={"label"}>Name</label>
            <Input
              placeholder={"Full Name"}
              type="text"
              onChange={(e) => changeForm(e.target.value)}
            />
          </Row>
        </Col>
        <CardElement options={{ ...createOptions(), hidePostalCode: true }} />
        <Button
          type="primary"
          disabled={!stripe || loading || !name}
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
        <Form incrementStep={props.incrementStep} />
      </Elements>
    </div>
  );
};

export default Payment;
