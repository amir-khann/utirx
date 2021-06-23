import React, { useState } from "react";
import { Input, Tag, Button } from "antd";

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
  return (
    <div>
      <h2>Allergies</h2>
      <small>List down any allergies you may have</small>
      <br />
      <Input onChange={handleInputChange} onKeyDown={keyDown} value={allergy} />
      {allergies.map((item, index) => {
        return (
          <Tag key={index.toString()}>
            {item}
          </Tag>
        );
      })}
      <div>
        <Button onClick={() => incrementStep()}>Next</Button>
      </div>
    </div>
  );
};

export default Allergies;
