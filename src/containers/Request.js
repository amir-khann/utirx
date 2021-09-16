import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import "../App.css";

import Question from "../components/Question";
import Consent from "../components/Consent";
import config from "../config";
import Allergies from "../components/Allergies";
import PersonalInfo from "../components/PersonalInfo";
import Payment from "../components/Payment";
import Success from "../components/Success";
import Container from "../components/Container";
import Loader from "../components/Loader";

const Request = () => {
  const history = useHistory();
  const { questions, index, step, apiRequest } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const incrementIndex = (question, answer) => {
    let answers = apiRequest.questions;
    if (answers) {
      answers = [...answers, { question, answer }];
    } else {
      answers = [{ question, answer }];
    }
    dispatch({
      type: "SET_API_REQUEST",
      apiRequest: {
        ...apiRequest,
        ...{ questions: _.uniqBy(answers, "question") },
      },
    });
    if (index + 1 === questions.length) {
      console.log(apiRequest);
      dispatch({ type: "SET_STEP", step: step + 1 });
    } else {
      dispatch({ type: "SET_INDEX", index: index + 1 });
    }
  };

  const decrementIndex = () => {
    if (index !== 0) {
      dispatch({ type: "SET_INDEX", index: index - 1 });
    }
  };

  const incrementStep = async (data) => {
    if (step === 1) {
      dispatch({
        type: "SET_API_REQUEST",
        apiRequest: {
          ...apiRequest,
          allergies: data,
        },
      });
    }
    if (step === 3) {
      dispatch({
        type: "SET_API_REQUEST",
        apiRequest: { ...apiRequest, ...data },
      });
    }
    if (step === 4) {
      const response = await axios.post(`${config.baseUrl}request/card`, {
        ...apiRequest,
        ...data,
      });
      dispatch({
        type: "SET_API_REQUEST",
        apiRequest: { ...apiRequest, ...response.data },
      });
      await axios.post(`${config.baseUrl}request`, {
        ...apiRequest,
        ...response.data,
      });
    }
    console.log({ ...apiRequest, ...data });
    dispatch({ type: "SET_STEP", step: step + 1 });
  };

  const decrementStep = () => {
    if (step > 0) {
      dispatch({ type: "SET_STEP", step: step - 1 });
    }
  };

  useEffect(() => {
    axios.get(`${config.baseUrl}questions`).then((res) => {
      dispatch({ type: "SET_QUESTIONS", questions: res.data });
      setLoading(false);
    });
  }, [dispatch]);
  return (
    <Container>
      {loading ? (
        <Loader />
      ) : step === 0 ? (
        <Question
          question={questions[index]}
          incrementIndex={incrementIndex}
          decrementIndex={decrementIndex}
          redirect={history}
          index={index}
        />
      ) : step === 1 ? (
        <Allergies
          incrementStep={incrementStep}
          decrementStep={decrementStep}
        />
      ) : step === 2 ? (
        <Consent
          history={history}
          incrementStep={incrementStep}
          decrementStep={decrementStep}
        />
      ) : step === 3 ? (
        <PersonalInfo
          incrementStep={incrementStep}
          decrementStep={decrementStep}
        />
      ) : step === 4 ? (
        <Payment incrementStep={incrementStep} decrementStep={decrementStep} />
      ) : (
        <Success history={history} />
      )}
    </Container>
  );
};

export default Request;
