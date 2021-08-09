import React from "react";
import { useHistory } from "react-router-dom";

import StickyNavbar from "../components/StickyNavbar";
import Content from "../components/Content";
import Footer from "../components/Footer";
import '../App.css';
const LandingPage = () => {
  const history = useHistory();
  const navigate = () => {
    history.push("/request");
  }
  return (
    <div className={"landing-page"}>
      <StickyNavbar />
      <Content navigate={navigate}/>
      <Footer />
    </div>
  );
};

export default LandingPage;
