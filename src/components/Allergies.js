import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Button, Image } from "antd";

const Allergies = (props) => {
  const { allergies } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [allergy, setAllergy] = useState("");
  const handleInputChange = (e) => {
    if(e.target.value[e.target.value.length-1] !== ',') {
      setAllergy(e.target.value);
    } else if (allergy.length > 0) {
      let mAllergies = allergies;
      mAllergies.push(allergy);
      dispatch({ type: "SET_ALLERGIES", allergies: [...mAllergies] });
      setAllergy("");
    }
  };
  const keyDown = (e) => {
    if (e.keyCode === 13 && allergy !== "") {
      let mAllergies = allergies;
      mAllergies.push(allergy);
      dispatch({ type: "SET_ALLERGIES", allergies: [...mAllergies] });
      setAllergy("");
    }
  };
  const incrementStep = () => {
    props.incrementStep(allergies);
  };
  const deleteAllergy = (item) => {
    dispatch({
      type: "SET_ALLERGIES",
      allergies: allergies.filter((i) => i !== item),
    });
  };
  return (
    <div className="flex column">
      <div className="back-container">
        <p className="link-button" onClick={() => props.decrementStep()}>Go Back</p>
      </div>
      <div className="flex responsive">
        <div className="interview">
          <Image src="allergies.svg" preview={false} width={"90%"} />
        </div>
        <div className="flex column vh-90 allergies question">
          <p>Do you have any allergies?</p>
          <p className="helper-message m-t-10-px">
            List down any allergies you may have.<br/>Separate each allergy with a comma or press Enter key.
          </p>
          <br />
          <Input
            onChange={handleInputChange}
            onKeyDown={keyDown}
            value={allergy}
            style={{ width: "100%" }}
          />
          <div className="chips">
            {allergies.map((item, index) => {
              return (
                <div className="chip" key={index.toString()}>
                  <span className="allergy">{item}</span>
                  <span
                    className="close-button"
                    onClick={() => deleteAllergy(item)}
                  >
                    &times;
                  </span>
                </div>
              );
            })}
          </div>
          <div className="action">
            <Button onClick={() => incrementStep()} type="primary">
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allergies;
