import React from "react";
import { Button, Space } from "antd";

const Consent = (props) => {
  return (
    <div>
      <p>Are you sure you want to continue?</p>
      <Space>
        <Button type="primary" onClick={props.incrementStep}>Yes</Button>
        <Button onClick={() => props.history.push("/")}>No</Button>
      </Space>
    </div>
  );
};

export default Consent;
