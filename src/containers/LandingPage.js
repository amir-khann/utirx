import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "antd";
const LandingPage = () => {
  const history = useHistory();
  return (
    <div className={"landing-page"}>
      <Button
        type="default"
        size="large"
        shape="round"
        onClick={() => history.push("/request")}
      >
        Request Prescription
      </Button>
    </div>
  );
};

export default LandingPage;
