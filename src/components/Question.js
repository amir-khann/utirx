import React, { useState } from "react";
import { Image } from "antd";
import { CSSTransition } from "react-transition-group";
import Answers from "./Answers";

const Question = (props) => {
  const [answer, setAnswer] = useState(false);
  const [error, setError] = useState(false);
  const handleButtonClick = (question, answer) => {
    props.incrementIndex(question._id, answer.answer);
    setAnswer(false);
  };
  const getAnswer = (ans) => {
    if (ans.success) {
      setError(false);
      setAnswer(ans);
      setTimeout(() => {
        handleButtonClick(props.question, ans);
      }, 1000);
    } else {
      setError(true);
      setAnswer(ans);
    }
  };
  return (
    <div className="flex responsive">
      <div className="interview">
        <Image src="interview.svg" preview={false} width={"100%"} />
      </div>
      <div className="questions">
        <CSSTransition timeout={1000}>
          <div className={"question"}>
            <p>{props.question.question}</p>
            {props.question.helper && <p className="helper-message">{props.question.helper}</p>}
            <form>
              {props.question.answers.map((ans, index) => {
                return (
                  <Answers
                    answer={ans}
                    key={index.toString()}
                    onChange={getAnswer}
                    questionIndex={props.index}
                    selectedAnswer={answer}
                  />
                );
              })}
            </form>
            {error && (
              <small className="error-message">{props.question.error}</small>
            )}
            <div
              style={{
                display: "flex"
              }}
            >
              {props.index !== 0 && <p
                onClick={() => props.decrementIndex()}
                className="link-button"
              >
                Previous
              </p>}
            </div>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default Question;
