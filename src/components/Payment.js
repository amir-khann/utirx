import React, { useState, useEffect } from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Button, Typography } from "antd";
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
  const { stepOne, apiRequest } = useSelector((state) => state);
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
      <div className={"card m-t-10-px"}>
        <Title level={2}>Payment Information</Title>
        <div className="flex details">
          <small style={{ fontWeight: "bold", fontSize: "15px", width: "50%" }}>Name</small>
          <label style={{ fontWeight: "lighter", fontSize: "20px" }}>
            {stepOne.name}
          </label>
        </div>
        <div className="flex details">
          <small style={{ fontWeight: "bold", fontSize: "15px", width: "50%" }}>DOB</small>
          <label style={{ fontWeight: "lighter", fontSize: "20px" }}>
            {moment(stepOne.dob).format("MM/DD/YYYY")}
          </label>
        </div>
        <div className="flex details">
          <small style={{ fontWeight: "bold", fontSize: "15px", width: "50%" }}>
            Pharmacy
          </small>
          <div className="flex column" style={{width: "50%"}}>
            <label style={{ fontWeight: "lighter", fontSize: "20px" }}>
              {apiRequest.pharmacy.name}
            </label>
            <label style={{ fontWeight: "lighter", fontSize: "20px" }}>
              {apiRequest.pharmacy.address}
            </label>
          </div>
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
        <label style={{ fontWeight: "bold", fontSize: "20px" }}>
          Credit Card
        </label>
        <CardElement options={{ ...createOptions(), hidePostalCode: true }} />
        <small className="description-message">{`* You will be charged $${price} and your credit card statement will show "OnlineUTIMeds.com LLC" as a merchant name`}</small>
        <Button
          type="primary"
          disabled={!stripe || loading}
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
      <Elements stripe={stripePromise}>
        <Form incrementStep={props.incrementStep} />
      </Elements>
    </div>
  );
};

export default Payment;
