import React from "react";
import { Button, Space, Image } from "antd";
import { CSSTransition } from "react-transition-group";

const Question = (props) => {
  const handleButtonClick = (question, answer) => {
    if (answer.success) {
      props.incrementIndex(question._id, answer.answer);
    } else {
      props.redirect.push("/error");
    }
  };
  return (
    <div className="flex">
      <div className="interview">
        <Image src="interview.svg" preview={false} width={"100%"} />
      </div>
      <div className="questions">
        <CSSTransition
          timeout={1000}
        >
          <div className={"question"}>
            <p>{props.question.question}</p>
            <Space style={{ float: "right" }}>
              {props.question.answers.map((answer, index) => {
                return (
                  <Button
                    key={index.toString()}
                    onClick={() => handleButtonClick(props.question, answer)}
                    type={answer.answer === "Yes" ? "primary" : "default"}
                  >
                    {answer.answer}
                  </Button>
                );
              })}
            </Space>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default Question;
