import React from "react";
import { Button, Space, Image } from "antd";

const Consent = (props) => {
  return (
    <div className="flex">
      <div className="interview">
        <Image src="agreement.svg" preview={false} width={"90%"} />
      </div>
      <div className="flex align-center column vh-90">
        <p>Are you sure you want to continue?</p>
        <Space>
          <Button type="primary" onClick={props.incrementStep}>
            Yes
          </Button>
          <Button onClick={() => props.history.push("/")}>No</Button>
        </Space>
      </div>
    </div>
  );
};

export default Consent;
