import axios from "axios";
import React, { useState } from "react";
import config from "../config";
import MapComponent from "./MapComponent";
import { Input, Button, Upload, List, Row, Col } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import moment from "moment";

import vaidateNameAndDOB from "../validators/StepOne";
import validateStepTwo from "../validators/StepTwo";

const PersonalInfo = (props) => {
  const [step, setStep] = useState(0);
  const [stepOne, setStepOne] = useState({});
  const [stepTwo, setStepTwo] = useState({});
  const [stepThree, setStepThree] = useState({
    pharmacy: {},
  });
  const [loading, setLoading] = useState(false);
  const [pharmacies, setPharmacies] = useState([]);
  const [pharmacy, setPharmacy] = useState({});
  const [error, setError] = useState("");
  const [manualPharmacy, setManualPharmacy] = useState({
    name: "",
    address: "",
  });
  const [dateError, setDateError] = useState(false);
  const [errorStepOne, setErrorStepOne] = useState({});
  const [errorStepTwo, setErrorStepTwo] = useState({});

  const changeForm = (name, value) => {
    let temp = stepOne;
    temp[name] = value;
    setStepOne({ ...temp });
    if (name === "dob") {
      try {
        const now = moment();
        const dob = moment(value);
        const age = now.diff(dob, "years");
        console.log("age ", age);
        if (age >= 18 && age <= 65) {
          setDateError(false);
        } else {
          setDateError(true);
        }
      } catch (error) {}
    }
  };
  const changeStepTwo = (name, value) => {
    console.log(value);
    let temp = stepTwo;
    temp[name] = value;
    setStepTwo({ ...temp });
  };
  const submitStepOne = async (e) => {
    try {
      e.preventDefault();
      const errorsStepOne = vaidateNameAndDOB(stepOne);
      console.log(errorsStepOne);
      if (errorsStepOne.name || errorsStepOne.dob) {
        setErrorStepOne(errorsStepOne);
        return;
      }
      setLoading(true);
      if (!error) {
        const { data } = await axios.post(
          `${config.baseUrl}request/get-request-by-name`,
          stepOne
        );
        if (!data.length) {
          setStep(step + 1);
        } else {
          setError(
            "This person seems to have received the prescription in the last two months. You may continue at your own risk, but the doctor may reject your prescription if your ID matches with the previously issued prescription record. Are you sure you did not receive the prescription in the last 2 months and want to continue?"
          );
        }
      } else {
        setStep(step + 1);
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };
  const submitStepTwo = async (e) => {
    try {
      e.preventDefault();
      const errors = validateStepTwo(stepTwo);
      if (
        errors.email ||
        errors.phoneNumber ||
        errors.street ||
        errors.city ||
        errors.state ||
        errors.zipcode ||
        errors.identityPictures
      ) {
        setErrorStepTwo(errors);
        return;
      }
      setLoading(true);
      const { data } = await axios.get(
        `${config.baseUrl}places/${stepTwo.street}, ${stepTwo.city}, ${stepTwo.state}`
      );
      setPharmacies(data);
      setPharmacy(data[0]);
      setStep(step + 1);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  const changeStepThree = (name, value) => {
    console.log(name, value);
    let temp = stepThree.pharmacy;
    temp[name] = value;
    setManualPharmacy(temp);
  };
  const selectPharmacy = () => {
    if (manualPharmacy.name && manualPharmacy.address) {
      setStepThree({ ...{ pharmacy: manualPharmacy } });
      props.incrementStep({
        ...stepOne,
        ...stepTwo,
        ...{ pharmacy: manualPharmacy },
      });
    } else {
      const { name, formatted_address } = pharmacy;
      props.incrementStep({
        ...stepOne,
        ...stepTwo,
        ...{ pharmacy: { name, address: formatted_address } },
      });
    }
  };

  const addFiles = ({ file }) => {
    let reader = new FileReader();
    console.log(file);
    console.log("code running");
    reader.onload = (e) => {
      let pictures = stepTwo.identityPictures || [];
      setStepTwo({
        ...stepTwo,
        ...{ identityPictures: [...pictures, { url: e.target.result }] },
      });
    };
    reader.readAsDataURL(file.originFileObj);
  };
  return (
    <div className="column">
      <div className="back-container">
        <p className="link-button" onClick={() => props.decrementStep()}>
          Go Back
        </p>
      </div>
      <div className="responsive">
        <div className="tabs">
          <div className={step === 0 ? "tab active title" : "tab title"}>
            Step 1
          </div>
          <div className={step === 1 ? "tab active title" : "tab title"}>
            Step 2
          </div>
          <div className={step === 2 ? "tab active title" : "tab title"}>
            Step 3
          </div>
        </div>
        <Col span={24}>
          {step === 0 && (
            <form>
              <Row>
                <label className={"helper-message"}>Name</label>
                <Input
                  placeholder={"Full Name"}
                  type="text"
                  onChange={(e) => changeForm(e.target.name, e.target.value)}
                  name="name"
                />
                {errorStepOne.name && (
                  <small className="error-message">{errorStepOne.name}</small>
                )}
              </Row>
              <Row>
                <label className={"helper-message"}>Date of Birth</label>
                <Input
                  type="date"
                  onChange={(e) => changeForm(e.target.name, e.target.value)}
                  name="dob"
                />
                {errorStepOne.dob && (
                  <small className="error-message">{errorStepOne.dob}</small>
                )}
                {dateError && (
                  <small className="error-message">
                    You should be between the age of 18 and 65 years to
                    continue.
                  </small>
                )}
              </Row>
              <p className="error-message">{error}</p>
              <Button
                loading={loading}
                onClick={(e) => submitStepOne(e)}
                disabled={dateError}
                type="primary"
              >
                Continue
              </Button>
            </form>
          )}
          {step === 1 && (
            <div>
              <form>
                <div>
                  <label className={"helper-message"}>Email</label>
                  <Input
                    type="email"
                    name="email"
                    onChange={(e) =>
                      changeStepTwo(e.target.name, e.target.value)
                    }
                  />
                  {errorStepTwo.email && (
                    <small className="error-message">
                      {errorStepTwo.email}
                    </small>
                  )}
                </div>
                <div>
                  <label className={"helper-message"}>Phone Number</label>
                  <Input
                    type="text"
                    name="phoneNumber"
                    onChange={(e) =>
                      changeStepTwo(e.target.name, e.target.value)
                    }
                  />
                  {errorStepTwo.phoneNumber && (
                    <small className="error-message">
                      {errorStepTwo.phoneNumber}
                    </small>
                  )}
                </div>
                <div className="justify-space-between">
                  <div style={{ width: "40%" }}>
                    <label className={"helper-message"}>Street</label>
                    <Input
                      type="text"
                      name="street"
                      onChange={(e) =>
                        changeStepTwo(e.target.name, e.target.value)
                      }
                    />
                    {errorStepTwo.street && (
                      <small className="error-message">
                        {errorStepTwo.street}
                      </small>
                    )}
                  </div>
                  <div>
                    <label className={"helper-message"}>City</label>
                    <Input
                      type="text"
                      name="city"
                      onChange={(e) =>
                        changeStepTwo(e.target.name, e.target.value)
                      }
                    />
                    {errorStepTwo.city && (
                      <small className="error-message">
                        {errorStepTwo.city}
                      </small>
                    )}
                  </div>
                  <div>
                    <label className={"helper-message"}>State</label>
                    <Input
                      type="text"
                      name="state"
                      onChange={(e) =>
                        changeStepTwo(e.target.name, e.target.value)
                      }
                    />
                    {errorStepTwo.state && (
                      <small className="error-message">
                        {errorStepTwo.state}
                      </small>
                    )}
                  </div>
                </div>
                <div>
                  <label className={"helper-message"}>Zip Code</label>
                  <Input
                    type="text"
                    name="zipcode"
                    onChange={(e) =>
                      changeStepTwo(e.target.name, e.target.value)
                    }
                  />
                  {errorStepTwo.zipcode && (
                    <small className="error-message">
                      {errorStepTwo.zipcode}
                    </small>
                  )}
                </div>
                <div>
                  <label className={"helper-message"}>
                    Identity Pictures (Front and Back)
                  </label>
                  <div>
                    <Upload
                      onChange={(e) => addFiles(e)}
                      customRequest={({ file, onSuccess }) => {
                        setTimeout(() => {
                          onSuccess("ok");
                        }, 0);
                      }}
                      accept="image/*"
                    >
                      <Button icon={<UploadOutlined />}>Click to Select</Button>
                    </Upload>
                    <small className="error-message">
                      {errorStepTwo.identityPictures}
                    </small>
                  </div>
                  {/* <input
                  type="file"
                  onChange={(e) =>
                    changeStepTwo("identityPhoto", e.target.files[0])
                  }
                /> */}
                </div>
                <Button
                  disabled={loading}
                  loading={loading}
                  onClick={(e) => submitStepTwo(e)}
                  type="primary"
                  style={{ marginTop: "10px" }}
                >
                  Next
                </Button>
              </form>
            </div>
          )}
          {step === 2 && (
            <div style={{ display: "flex" }}>
              <div style={{}}>
                <div
                  style={{
                    marginRight: "20px",
                    height: "50vh",
                    overflow: "scroll",
                  }}
                >
                  <List
                    dataSource={pharmacies}
                    renderItem={(item) => (
                      <List.Item onClick={() => setPharmacy(item)}>
                        <List.Item.Meta
                          title={item.name}
                          description={item.formatted_address}
                        />
                         ̰
                      </List.Item>
                    )}
                  />
                </div>
                OR
                <form style={{ marginRight: "20px" }}>
                  <div>
                    <label className={"helper-message"}>Pharmacy Name</label>
                    <Input
                      onChange={(e) =>
                        changeStepThree(e.target.name, e.target.value)
                      }
                      name="name"
                    />
                  </div>
                  <div>
                    <label className={"helper-message"}>Pharmacy Address</label>
                    <Input
                      onChange={(e) =>
                        changeStepThree(e.target.name, e.target.value)
                      }
                      name="address"
                    />
                  </div>
                </form>
                <Button
                  type="primary"
                  onClick={() => selectPharmacy()}
                  style={{ marginTop: "10px" }}
                >
                  Next
                </Button>
              </div>
              <MapComponent
                lat={pharmacy.geometry.location.lat}
                lng={pharmacy.geometry.location.lng}
              />
            </div>
          )}
        </Col>
      </div>
    </div>
  );
};

export default PersonalInfo;
