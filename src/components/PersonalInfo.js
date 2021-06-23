import axios from "axios";
import React, { useState } from "react";
import config from "../config";
import MapComponent from "./MapComponent";
import { Input, Button, Upload, List, Row, Col } from "antd";
import { UploadOutlined } from "@ant-design/icons";

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

  const changeForm = (name, value) => {
    let temp = stepOne;
    temp[name] = value;
    setStepOne({ ...temp });
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
      setLoading(true);
      const { data } = await axios.post(
        `${config.baseUrl}request/get-request-by-name`,
        stepOne
      );
      if (!data.length) {
        setStep(step + 1);
      } else {
        alert("You already have applied for a prescription in last two months");
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };
  const submitStepTwo = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const { data } = await axios.get(
        `${config.baseUrl}/places/${stepTwo.address}`
      );
      setPharmacies(data);
      setPharmacy(data[0]);
      setStep(step + 1);
    } catch (err) {
      setLoading(false);
    }
  };
  const changeStepThree = (name, value) => {
    let pharmacy = stepThree.pharmacy;
    pharmacy[name] = value;
    setStepThree({ ...{ pharmacy } });
  };
  const selectPharmacy = () => {
    let selectedPharmacy = stepThree.pharmacy;
    selectedPharmacy.name = pharmacy.name;
    selectedPharmacy.address = pharmacy.formatted_address;
    setStepThree({ ...{ pharmacy: selectedPharmacy } });
    props.incrementStep({ ...stepOne, ...stepTwo, ...stepThree });
  };
  return (
    <div>
      <div className="tabs">
        <div className={step === 0 ? "tab active" : "tab"}>Step 1</div>
        <div className={step === 1 ? "tab active" : "tab"}>Step 2</div>
        <div className={step === 2 ? "tab active" : "tab"}>Step 3</div>
      </div>
      <Col span={24}>
        {step === 0 && (
          <form>
            <Row>
              <label className={"label"}>Name</label>
              <Input
                placeholder={"Full Name"}
                type="text"
                onChange={(e) => changeForm(e.target.name, e.target.value)}
                name="name"
              />
            </Row>
            <Row>
              <label className={"label"}>Date of Birth</label>
              <Input
                type="date"
                onChange={(e) => changeForm(e.target.name, e.target.value)}
                name="dob"
              />
            </Row>
            <Button loading={loading} onClick={(e) => submitStepOne(e)}>
              Submit
            </Button>
          </form>
        )}
        {step === 1 && (
          <div>
            <form>
              <div>
                <label className={"label"}>Email</label>
                <Input
                  type="email"
                  name="email"
                  onChange={(e) => changeStepTwo(e.target.name, e.target.value)}
                />
              </div>
              <div>
                <label className={"label"}>Phone Number</label>
                <Input
                  type="text"
                  name="phoneNumber"
                  onChange={(e) => changeStepTwo(e.target.name, e.target.value)}
                />
              </div>
              <div>
                <label className={"label"}>Address</label>
                <Input
                  type="text"
                  name="address"
                  onChange={(e) => changeStepTwo(e.target.name, e.target.value)}
                />
              </div>
              <div>
                <label className={"label"}>Zip Code</label>
                <Input
                  type="text"
                  name="zipcode"
                  onChange={(e) => changeStepTwo(e.target.name, e.target.value)}
                />
              </div>
              <div>
                <label className={"label"}>Photo</label>
                <div>
                  <Upload
                    beforeUpload={(file) =>
                      changeStepTwo("identityPhoto", file)
                    }
                  >
                    <Button icon={<UploadOutlined />}>Click to Select</Button>
                  </Upload>
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
              >
                Next
              </Button>
            </form>
          </div>
        )}
        {step === 2 && (
          <div style={{ display: "flex" }}>
            <div style={{  }}>
              <div style={{ marginRight: "20px", height:"50vh", overflow: "scroll" }}>
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
              <form style={{marginRight:'20px'}}>
                <div>
                  <label className={"label"}>Pharmacy Name</label>
                  <Input
                    onChange={(e) =>
                      changeStepThree(e.target.name, e.target.value)
                    }
                    name="name"
                  />
                </div>
                <div>
                  <label className={"label"}>Pharmacy Address</label>
                  <Input
                    onChange={(e) =>
                      changeStepThree(e.target.name, e.target.value)
                    }
                    name="address"
                  />
                </div>
              </form>
              <Button type="primary" onClick={() => selectPharmacy()}>
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
  );
};

export default PersonalInfo;