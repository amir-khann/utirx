import React from "react";
import "./Styles/Answers.css";

const Answers = ({ answer, onChange, questionIndex, selectedAnswer }) => {
  // const [checked, setChecked] = useState(false);
  // useEffect(() => {
  //   setChecked(false);
  // }, [questionIndex]);
  return (
    <div className="radiobtn">
      <input
        type="radio"
        id={answer.answer}
        name="answer"
        value={answer.answer}
        onChange={() => {
          // setChecked(true);
          onChange(answer);
        }}
        checked={selectedAnswer._id === answer._id}
      />
      <label htmlFor={answer.answer}>{answer.answer}</label>
    </div>
  );
};

export default Answers;
