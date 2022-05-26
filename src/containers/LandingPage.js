import React from "react";
import LandingPageContent from "../components/LandingPageContent";
import { useHistory } from "react-router-dom";

import "../App.css";

const LandingPage = () => {
  const history = useHistory();
  const navigate = () => {
    history.push("/request");
  };
  return (
    <div className={"landing-page"}>
      <LandingPageContent navigate={navigate} />
    </div>
  );
};

export default LandingPage;
