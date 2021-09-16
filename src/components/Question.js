import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Image } from "antd";
import { CSSTransition } from "react-transition-group";
import Answers from "./Answers";

const Question = (props) => {
  const { answer, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleButtonClick = (question, answer) => {
    props.incrementIndex(question._id, answer.answer);
    dispatch({ type: "SET_ANSWER", answer: false });
  };
  const getAnswer = (ans) => {
    if (ans.success) {
      dispatch({ type: "SET_ERROR", error: false });
      dispatch({ type: "SET_ANSWER", answer: ans });
      setTimeout(() => {
        handleButtonClick(props.question, ans);
      }, 1000);
    } else {
      dispatch({ type: "SET_ERROR", error: true });
      dispatch({ type: "SET_ANSWER", answer: ans });
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
            {props.question.helper && (
              <p className="helper-message">{props.question.helper}</p>
            )}
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
                display: "flex",
              }}
            >
              {props.index !== 0 && (
                <p
                  onClick={() => props.decrementIndex()}
                  className="link-button m-t-50-px"
                >
                  Previous
                </p>
              )}
            </div>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default Question;
