import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import config from "../config";
import MapComponent from "./MapComponent";
import { Input, Button, Upload, List, Row, Col } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import moment from "moment";
import MaskedInput from "antd-mask-input";

import vaidateNameAndDOB from "../validators/StepOne";
import validateStepTwo from "../validators/StepTwo";
import Payment from "./Payment";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [errors, setErrors] = useState({});

  const changeForm = (name, value) => {
    setError(false);
    let temp = stepOne;
    temp[name] = value;
    dispatch({ type: "SET_STEP_ONE", stepOne: { ...temp } });
  };
  const changeStepTwo = (name, value) => {
    if(name === "phoneNumber") {
      setErrorStepTwo({ ...errorStepTwo, phoneNumber: false });
    }
    let temp = stepTwo;
    temp[name] = value;
    dispatch({ type: "SET_STEP_TWO", stepTwo: { ...temp } });
  };
  const submitStepOne = async (e) => {
    try {
      e.preventDefault();
      const errorsStepOne = vaidateNameAndDOB(stepOne);
      if (
        errorsStepOne.firstName ||
        errorsStepOne.lastName ||
        errorsStepOne.dob ||
        errorsStepOne.identityNumber ||
        errorsStepOne.identityPictures
      ) {
        setErrorStepOne(errorsStepOne);
        return;
      }
      setLoading(true);
      if (!error) {
        const { data } = await axios.post(
          `${config.baseUrl}request/get-request-by-name`,
          {
            identityNumber: stepOne.identityNumber.replace(/[^a-zA-Z0-9]/g, ""),
          }
        );
        if (!data.request.length) {
          setLoading(false);
          setStep(step + 1);
        } else {
          setError(
            `It seems you have already requested a prescription in last ${data.settings[0].prescriptionWindow} days. You cannot request a new prescription at this time.`
          );
          setLoading(false);
        }
      } else {
        setStep(step + 1);
      }
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
        `${config.baseUrl}places/${stepTwo.zipcode}`
      );
      setPharmacies(data);
      setPharmacyToDisplay(data);
      setPharmacy(data[0]);
      setLoading(false);
      setStep(step + 1);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  const changeStepThree = (name, value) => {
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
      props.dispatchFormValues({
        ...stepOne,
        ...stepTwo,
        ...{ pharmacy: manualPharmacy },
      });
      setStep(step + 1);
    } else {
      if (pharmacies.length === 0) {
        setErrors({
          ...errors,
          name: "Please enter pharmacy name",
          address: "Please enter pharmacy address",
        });
        return;
      }
      const { name, formatted_address } = pharmacy;
      props.dispatchFormValues({
        ...stepOne,
        ...stepTwo,
        ...{ pharmacy: { name, address: formatted_address } },
      });
      setStep(step + 1);
    }
  };

  const addFront = ({ file }) => {
    if (file.status !== "removed") {
      let reader = new FileReader();
      reader.onload = (e) => {
        let pictures = stepOne.identityPictures || {};
        pictures.front = {
          uid: file.uid,
          url: e.target.result,
          name: file.name,
        };
        dispatch({
          type: "SET_STEP_ONE",
          stepOne: {
            ...stepOne,
            ...{
              identityPictures: pictures,
            },
          },
        });
      };
      reader.readAsDataURL(file.originFileObj);
    }
  };
  const addBack = ({ file }) => {
    if (file.status !== "removed") {
      let reader = new FileReader();
      reader.onload = (e) => {
        let pictures = stepOne.identityPictures || {};
        pictures.back = {
          uid: file.uid,
          url: e.target.result,
          name: file.name,
        };
        dispatch({
          type: "SET_STEP_ONE",
          stepOne: {
            ...stepOne,
            ...{
              identityPictures: pictures,
            },
          },
        });
      };
      reader.readAsDataURL(file.originFileObj);
    }
  };
  const removePicture = (index) => {
    let pictures = stepOne.identityPictures;
    if (index === 0) {
      delete pictures.front;
    } else {
      delete pictures.back;
    }
    dispatch({
      type: "SET_STEP_ONE",
      stepOne: {
        ...stepOne,
        ...{
          identityPictures: pictures,
        },
      },
    });
  };
  const search = (e) => {
    const { value } = e.target;
    const temp = pharmacies.filter((pharma) =>
      pharma.name.toLowerCase().includes(value.toLowerCase())
    );
    setPharmacyToDisplay(temp);
  };
  const changePharmacy = (pharmacy, index) => {
    setPharmacy(pharmacy);
    setManualPharmacy({
      name: "",
      address: "",
    });
    setActiveIndex(index);
  };
  const dobChanged = (e) => {
    setDateError();
    setErrorStepOne({ ...errorStepOne, dob: false });
    if (e.target.value.length === 0) {
      const temp = stepOne;
      temp.dob = "";
      dispatch({
        type: "SET_STEP_ONE",
        stepOne: {
          ...temp,
        },
      });
      return;
    }
    const now = moment();
    const dob = moment(e.target.value, "MM/DD/YYYY", true);
    if (dob.isValid()) {
      const age = now.diff(dob, "years");
      if (age < 18 || age > 65) {
        setDateError(true);
      } else {
        const temp = stepOne;
        temp.dob = dob;
        dispatch({
          type: "SET_STEP_ONE",
          stepOne: {
            ...temp,
          },
        });
      }
    }
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
            onClick={() => setStep(0)}
          >
            Personal Info
          </div>
          <div
            className={step === 1 ? "tab active sub-title" : "tab sub-title"}
            onClick={() => (step > 1 ? setStep(1) : null)}
          >
            Additional Info
          </div>
          <div
            className={step === 2 ? "tab active sub-title" : "tab sub-title"}
            onClick={() => (step > 2 ? setStep(2) : null)}
          >
            Pharmacy
          </div>
          <div
            className={step === 3 ? "tab active sub-title" : "tab sub-title"}
            onClick={() => (step > 3 ? setStep(3) : null)}
          >
            Payment
          </div>
        </div>
        <Col span={24}>
          {step === 0 && (
            <form>
              <div className="justify-space-between">
                <Col>
                  <label className={"helper-message m-b-10-px m-t-10-px"}>
                    First Name
                  </label>
                  <Input
                    placeholder={"First Name"}
                    type="text"
                    onChange={(e) => changeForm(e.target.name, e.target.value)}
                    name="firstName"
                    value={stepOne.firstName}
                  />
                  {errorStepOne.firstName && (
                    <small className="error-message">
                      {errorStepOne.firstName}
                    </small>
                  )}
                </Col>
                <Col>
                  <label className={"helper-message m-b-10-px m-t-10-px"}>
                    Middle Name (optional)
                  </label>
                  <Input
                    placeholder={"Middle Name"}
                    type="text"
                    onChange={(e) => changeForm(e.target.name, e.target.value)}
                    name="middleName"
                    value={stepOne.middleName}
                  />
                </Col>
                <Col>
                  <label className={"helper-message m-b-10-px m-t-10-px"}>
                    Last Name
                  </label>
                  <Input
                    placeholder={"Last Name"}
                    type="text"
                    onChange={(e) => changeForm(e.target.name, e.target.value)}
                    name="lastName"
                    value={stepOne.lastName}
                  />
                  {errorStepOne.lastName && (
                    <small className="error-message">
                      {errorStepOne.lastName}
                    </small>
                  )}
                </Col>
              </div>
              <Row className="flex column">
                <label className={"helper-message m-b-10-px m-t-10-px"}>
                  Date of Birth
                </label>
                <MaskedInput
                  mask="11/11/1111"
                  name="dob"
                  size="20"
                  value={
                    (stepOne.dob && moment(stepOne.dob).format("MM/DD/YYYY")) ||
                    ""
                  }
                  onChange={(e) => dobChanged(e)}
                  placeholder="MM/DD/YYYY"
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
              <div className="flex column m-b-10-px m-t-10-px">
                <label className="helper-message m-b-0-px m-t-10-px">
                  License or Photo ID # (required)
                </label>
                <small className="description-message">
                  Unique identification id of your legal photo id issued by your
                  state
                </small>
                <Input
                  name="identityNumber"
                  value={stepOne.identityNumber}
                  onChange={(e) => changeForm(e.target.name, e.target.value)}
                />
                {errorStepOne.identityNumber && (
                  <small className="error-message">
                    Please Enter License or Photo ID #
                  </small>
                )}
              </div>
              <div className="m-b-10-px m-t-10-px">
                <label className={"helper-message m-b-10-px m-t-10-px"}>
                  Identification Document
                </label>
                <small className="description-message">
                  Upload your drivers license or legal photo ID issued by your
                  state, that includes your name, date of birth etc
                </small>
                <div className="upload-button">
                  <Upload
                    onChange={(e) => addFront(e)}
                    customRequest={({ file, onSuccess }) => {
                      setTimeout(() => {
                        onSuccess("ok");
                      }, 0);
                    }}
                    accept="image/*"
                    fileList={
                      stepOne.identityPictures?.front
                        ? [stepOne.identityPictures.front]
                        : []
                    }
                    defaultFileList={[]}
                    listType="picture"
                    onRemove={(file) => removePicture(0)}
                    onPreview={(file) => {}}
                  >
                    <Button icon={<UploadOutlined />}>Upload Front</Button>
                  </Upload>
                </div>
                <div className="upload-button">
                  <Upload
                    onChange={(e) => addBack(e)}
                    customRequest={({ file, onSuccess }) => {
                      setTimeout(() => {
                        onSuccess("ok");
                      }, 0);
                    }}
                    accept="image/*"
                    fileList={
                      stepOne.identityPictures?.back
                        ? [stepOne.identityPictures.back]
                        : []
                    }
                    defaultFileList={[]}
                    listType="picture"
                    onRemove={(file) => removePicture(1)}
                    onPreview={(file) => {}}
                  >
                    <Button icon={<UploadOutlined />}>Upload Back</Button>
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
                  {/* <Input
                    type="text"
                    name="phoneNumber"
                    onChange={(e) =>
                      changeStepTwo(e.target.name, e.target.value)
                    }
                    value={stepTwo.phoneNumber}
                  /> */}
                  <MaskedInput
                    mask="(111) 111-1111"
                    name="phoneNumber"
                    size="20"
                    value={stepTwo.phoneNumber}
                    onChange={(e) =>
                      changeStepTwo(e.target.name, e.target.value)
                    }
                    placeholder="(999) 999-9999"
                  />
                  {errorStepTwo.phoneNumber && (
                    <small className="error-message">
                      {errorStepTwo.phoneNumber}
                    </small>
                  )}
                </div>
                <div>
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
                <div className="justify-space-between">
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
                </div>

                <Button
                  disabled={loading}
                  loading={loading}
                  onClick={(e) => submitStepTwo(e)}
                  type="primary"
                  style={{ marginTop: "10px" }}
                >
                  Continue
                </Button>
              </form>
            </div>
          )}
          {step === 2 && (
            <>
              <h3 style={{ lineHeight: 2 }}>
                Please select a pharmacy. If you can't find the desired pharmacy
                in the list below type its name and address in the fields below.
              </h3>
              <div style={{ display: "flex" }}>
                <div className="full-width-on-mobile">
                  <div className="search">
                    <label className="helper-message">Search</label>
                    <Input name="search" onChange={(e) => search(e)} />
                  </div>
                  <div
                    style={{
                      height: "50vh",
                      width: "100%",
                      overflow: "scroll",
                    }}
                    className="places"
                  >
                    <List
                      dataSource={pharmacyToDisplay}
                      renderItem={(item, index) => (
                        <List.Item
                          onClick={() => changePharmacy(item, index)}
                          className={
                            activeIndex === index ? "active-pharmacy" : ""
                          }
                        >
                          <List.Item.Meta
                            title={item.name}
                            description={item.formatted_address}
                          />
                        </List.Item>
                      )}
                    />
                    {errors.pharmacy && (
                      <small className="error-message">{errors.pharmacy}</small>
                    )}
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
                      {errors.name && (
                        <small className="error-message">{errors.name}</small>
                      )}
                    </div>
                    <div>
                      <label className={"helper-message"}>
                        Pharmacy Address
                      </label>
                      <Input
                        onChange={(e) =>
                          changeStepThree(e.target.name, e.target.value)
                        }
                        name="address"
                      />
                      {errors.address && (
                        <small className="error-message">
                          {errors.address}
                        </small>
                      )}
                    </div>
                  </form>
                  <Button
                    type="primary"
                    onClick={() => selectPharmacy()}
                    style={{ marginTop: "10px" }}
                  >
                    Continue
                  </Button>
                </div>
                <MapComponent
                  lat={pharmacy?.geometry?.location?.lat || 0}
                  lng={pharmacy?.geometry?.location?.lng || 0}
                  style={{ maxWidth: "60%" }}
                  className="hide-on-mobile"
                />
              </div>
            </>
          )}
          {step === 3 && (
            <Payment
              incrementStep={props.incrementStep}
              decrementStep={props.decrementStep}
            />
          )}
        </Col>
      </div>
    </div>
  );
};

export default PersonalInfo;
