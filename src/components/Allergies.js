import React, { useState } from "react";
import { Input, Button, Image } from "antd";

const Allergies = (props) => {
  const [allergy, setAllergy] = useState("");
  const [allergies, setAllergies] = useState([]);
  const handleInputChange = (e) => {
    setAllergy(e.target.value);
  };
  const keyDown = (e) => {
    if (e.keyCode === 13) {
      let mAllergies = allergies;
      mAllergies.push(allergy);
      setAllergies([...mAllergies]);
      setAllergy("");
    }
  };
  const incrementStep = () => {
    props.incrementStep(allergies);
  };
  const deleteAllergy = (item) => {
    setAllergies(allergies.filter((i) => i !== item));
  };
  return (
    <div className="flex vh-50">
      <div className="interview">
        <Image src="allergies.svg" preview={false} width={"90%"} />
      </div>
      <div className="flex column align-center vh-90 allergies">
        <h2>Allergies</h2>
        <small>List down any allergies you may have</small>
        <br />
        <Input
          onChange={handleInputChange}
          onKeyDown={keyDown}
          value={allergy}
          style={{width: '100%'}}
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
          <Button onClick={() => incrementStep()}>Next</Button>
        </div>
      </div>
    </div>
  );
};

export default Allergies;
