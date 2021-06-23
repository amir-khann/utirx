import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../App.css";

import Question from "../components/Question";
import Consent from "../components/Consent";
import config from "../config";
import Allergies from "../components/Allergies";
import PersonalInfo from "../components/PersonalInfo";
import Payment from "../components/Payment";
import Success from "../components/Success";
import Container from "../components/Container";

const Request = () => {
  const history = useHistory();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [apiRequest, setRequest] = useState({
    questions: [],
    allergies: [],
  });

  const incrementIndex = (question, answer) => {
    let answers = apiRequest.questions;
    if (answers) {
      answers = [...answers, { question, answer }];
    } else {
      answers = [{ question, answer }];
    }
    setRequest({ ...apiRequest, ...{ questions: answers } });
    if (index + 1 === questions.length) {
      console.log(apiRequest);
      setStep(step + 1);
    } else {
      setIndex(index + 1);
    }
  };

  const incrementStep = async (data) => {
    if (step === 1) {
      setRequest({
        ...apiRequest,
        allergies: data,
      });
    }
    if (step === 3) {
      setRequest({ ...apiRequest, ...data });
    }
    if (step === 4) {
      const response = await axios.post(`${config.baseUrl}request/card`, {
        ...apiRequest,
        ...data,
      });
      setRequest({ ...apiRequest, ...{ data: response.data } });
      await axios.post(`${config.baseUrl}request`, { ...apiRequest, ...data });
    }
    console.log({ ...apiRequest, ...data });
    setStep(step + 1);
  };

  useEffect(() => {
    axios.get(`${config.baseUrl}questions`).then((res) => {
      setQuestions(res.data);
      setLoading(false);
    });
  }, []);
  return loading ? (
    <Container>
      <p>Loading...</p>
    </Container>
  ) : step === 0 ? (
    <Question
      question={questions[index]}
      incrementIndex={incrementIndex}
      redirect={history}
    />
  ) : step === 1 ? (
    <Allergies incrementStep={incrementStep} />
  ) : step === 2 ? (
    <Consent history={history} incrementStep={incrementStep} />
  ) : step === 3 ? (
    <PersonalInfo incrementStep={incrementStep} />
  ) : step === 4 ? (
    <Payment incrementStep={incrementStep} />
  ) : (
    <Success history={history}/>
  );
};

export default Request;
