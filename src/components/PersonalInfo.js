import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import config from "../config";
import MapComponent from "./MapComponent";
import { Input, Button, Upload, List, Row, Col } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import moment from "moment";

import vaidateNameAndDOB from "../validators/StepOne";
import validateStepTwo from "../validators/StepTwo";

const PersonalInfo = (props) => {
  const { stepOne, stepTwo, stepThree } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pharmacies, setPharmacies] = useState([]);
  const [pharmacyToDisplay, setPharmacyToDisplay] = useState([]);
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
    setError(false);
    let temp = stepOne;
    temp[name] = value;
    dispatch({ type: "SET_STEP_ONE", stepOne: { ...temp } });
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
    dispatch({ type: "SET_STEP_TWO", stepTwo: { ...temp } });
  };
  const submitStepOne = async (e) => {
    try {
      e.preventDefault();
      const errorsStepOne = vaidateNameAndDOB(stepOne);
      console.log(errorsStepOne)
      if (errorsStepOne.name || errorsStepOne.dob || errorsStepOne.identityNumber || errorsStepOne.identityPictures) {
        setErrorStepOne(errorsStepOne);
        return;
      }
      setLoading(true);
      if (!error) {
        const { data } = await axios.post(
          `${config.baseUrl}request/get-request-by-name`,
          {
            identityNumber: stepOne.identityNumber
          }
        );
        if (!data.request.length) {
          setStep(step + 1);
        } else {
          setError(
            `You have already requested a prescription in last ${data.settings[0].prescriptionWindow} days. You cannot request a new one.`
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
      setPharmacyToDisplay(data);
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
      dispatch({
        type: "SET_STEP_THREE",
        stepThree: { ...{ pharmacy: manualPharmacy } },
      });
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
    reader.onload = (e) => {
      let pictures = stepOne.identityPictures || [];
      dispatch({
        type: "SET_STEP_ONE",
        stepOne: {
          ...stepOne,
          ...{
            identityPictures: [
              ...pictures,
              { url: e.target.result, name: "File" },
            ],
          },
        },
      });
    };
    reader.readAsDataURL(file.originFileObj);
  };
  const search = (e) => {
    const { value } = e.target;
    const temp = pharmacies.filter((pharma) =>
      pharma.name.toLowerCase().includes(value.toLowerCase())
    );
    setPharmacyToDisplay(temp);
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
          <div
            className={step === 0 ? "tab active sub-title" : "tab sub-title"}
          >
            Personal Info
          </div>
          <div
            className={step === 1 ? "tab active sub-title" : "tab sub-title"}
          >
            Additional Info
          </div>
          <div
            className={step === 2 ? "tab active sub-title" : "tab sub-title"}
          >
            Pharmacy
          </div>
        </div>
        <Col span={24}>
          {step === 0 && (
            <form>
              <Row className="">
                <label className={"helper-message m-b-10-px m-t-10-px"}>
                  Name
                </label>
                <Input
                  placeholder={"Full Name"}
                  type="text"
                  onChange={(e) => changeForm(e.target.name, e.target.value)}
                  name="name"
                  value={stepOne.name}
                />
                {errorStepOne.name && (
                  <small className="error-message">{errorStepOne.name}</small>
                )}
              </Row>
              <Row className="">
                <label className={"helper-message m-b-10-px m-t-10-px"}>
                  Date of Birth
                </label>
                <Input
                  type="date"
                  onChange={(e) => changeForm(e.target.name, e.target.value)}
                  name="dob"
                  value={stepOne.dob}
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
              <div className="m-b-10-px m-t-10-px">
                <label className={"helper-message m-b-10-px m-t-10-px"}>
                  Identification Document (front and back of License or Photo
                  ID)
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
                    fileList={stepTwo.identityPictures}
                  >
                    <Button icon={<UploadOutlined />}>Click to Select</Button>
                  </Upload>
                  <small className="error-message">
                    {errorStepOne.identityPictures}
                  </small>
                </div>
                {/* <input
                  type="file"
                  onChange={(e) =>
                    changeStepTwo("identityPhoto", e.target.files[0])
                  }
                /> */}
              </div>
              <div className="flex column m-b-10-px m-t-10-px">
                <label className="helper-message m-b-0-px m-t-10-px">
                  License or Photo ID # (required)
                </label>
                <small className="description-message">
                  Upload your drivers license or legal photo ID issued by your
                  state, that includes your name, date of birth etc
                </small>
                <Input
                  name="identityNumber"
                  value={stepOne.identityNumber}
                  onChange={(e) => changeForm(e.target.name, e.target.value)}
                />
                {errorStepOne.identityNumber && (
                  <small className="error-message">
                    Please Enter Licence or Photo ID #
                  </small>
                )}
              </div>
              <p className="error-message">{error}</p>
              <Button
                loading={loading}
                onClick={(e) => submitStepOne(e)}
                disabled={dateError || error}
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
                    value={stepTwo.email}
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
                    value={stepTwo.phoneNumber}
                  />
                  {errorStepTwo.phoneNumber && (
                    <small className="error-message">
                      {errorStepTwo.phoneNumber}
                    </small>
                  )}
                </div>
                <div className="justify-space-between">
                  <div className="street">
                    <label className={"helper-message"}>Street</label>
                    <Input
                      type="text"
                      name="street"
                      onChange={(e) =>
                        changeStepTwo(e.target.name, e.target.value)
                      }
                      value={stepTwo.street}
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
                      value={stepTwo.city}
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
                      value={stepTwo.state}
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
                    value={stepTwo.zipcode}
                  />
                  {errorStepTwo.zipcode && (
                    <small className="error-message">
                      {errorStepTwo.zipcode}
                    </small>
                  )}
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
                  <div className="search">
                    <label className="helper-message">Search</label>
                    <Input name="search" onChange={(e) => search(e)} />
                  </div>
                  <List
                    dataSource={pharmacyToDisplay}
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
                style={{ maxWidth: "60%" }}
                className="hide-on-mobile"
              />
            </div>
          )}
        </Col>
      </div>
    </div>
  );
};

export default PersonalInfo;
