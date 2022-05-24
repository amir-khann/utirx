import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import axios from "axios";
import { ReactComponent as Clock } from "../assets/svgs/clock.svg";
import { ReactComponent as VectorTwo } from "../assets/svgs/Vector2.svg";
import { ReactComponent as Pick } from "../assets/svgs/pick.svg";
import { ReactComponent as Connect } from "../assets/svgs/connected.svg";
import { ReactComponent as Logo } from "../assets/svgs/logo.svg";
import { ReactComponent as ArrowDown } from "../assets/svgs/arrowdown.svg";
// import { ReactComponent as Women } from "../assets/svgs/women.svg";
import Loader from "./Loader";
import config from "../config";
import questions from "./questions";

const LandingPageContent = ({ navigate }) => {
  const [key, setKey] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`${config.baseUrl}settings/price`);
      setContent(questions(data.price));
      setIsLoading(false);
    })();
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <div className="home-wrapper">
      <div className="container content">
        <div className="logo">
          {/* <img src="vector.png" alt="logo" /> */}
          
          <div className="logo-img"><Logo/></div>
          <span>UTIRX</span>
        </div>
        <div className="flex hero-section justify-space-between ">
          <div className="right hero-content">
            <h1>Get your UTI treated today</h1>
            <h4>Don’t have time to go to your doctor ?</h4>
            <p>
              Get your UTI diagnosed online right now and get a subscription for
              antibiotics sent straight to your pharmacy within 24 hours all
              without the hassle of going to a doctor’s office.
            </p>
            <button className="hero-btn" onClick={() => navigate()}>
              Get Started
            </button>
          </div>
          <div className="left">
            {/* <Women /> */}
            <img src="pngwing.png" alt="" />
          </div>
        </div>
      </div>
      <div className="container-wrapper">
        <div className="container">
          <Row className="feature-wrapper" gutter={[16, 16]} justify={"space-between"}>
            <Col
              sm={24}
              md={12}
              xl={4}
              className="feature-content feature"
              
              style={{ marginBottom: "20px" }}
            >
              <div style={{ width: 52, marginRight: "2%" }}>
                <Connect />
              </div>
              <div>
                <h2>Get connected</h2>
                <p>Get connected to a provider within minutes.</p>
              </div>
            </Col>
            <Col sm={24} md={12} xl={4} className="feature-content">
              <div style={{ width: 52, marginRight: "2%" }}>
                <Pick />
              </div>
              <div>
                <h2>Pick up</h2>
                <p>
                  Pick up your prescription within 24 hours if qualified at your
                  pharmacy
                </p>
              </div>
            </Col>
            <Col sm={24} md={12} xl={4} className="feature-content">
              <div style={{ width: 52, marginRight: "2%" }}>
                <VectorTwo />
              </div>
              <div>
                <h2>Fast</h2>
                <p>
                  It’s fast. It’s easy. There are no hidden fees. And there’s no
                  appointment necessary
                </p>
              </div>
            </Col>
            <Col
              sm={24}
              md={12}
              xl={4}
              className="feature-content feature"
              style={{ marginBottom: "20px" }}
            >
              <div style={{ width: 52, marginRight: "2%" }}>
                <Clock />
              </div>
              <div>
                <h2>Easy</h2>
                <p>No insurance needed. It’s affordable, fast, and easy.</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="container">
        <div className="frequently">
          <h1>Frequently Asked</h1>
          <Row gutter={[32, 48]} justify="space-between">
            {content &&
              content.map((qu, index) => (
                <Col sm={24} md={10}>
                  <h2>{qu.question}</h2>
                  <p className={index === key && "animation"}>
                    {index === key
                      ? qu.answer
                      : qu.answer.length > 200
                      ? qu.answer.slice(0, 199) + "......."
                      : qu.answer}
                  </p>
                  {qu.answer.length > 100 && (
                    <div style={{ textAlign: "right" }}>
                      {qu.answer.length > 100 && index === key ? (
                        <button
                          className="read-more"
                          onClick={() => {
                            setKey(null);
                          }}
                        >
                          Show less
                          <img
                            src="vectorup.png"
                            alt="arrow"
                            style={{ marginLeft: "6px" }}
                          />
                        </button>
                      ) : (
                        <button
                          className="read-more"
                          onClick={() => {
                            setKey(index);
                          }}
                        >
                          Read More
                          {/* <img
                            src="vector 5.png"
                            alt="arrow"
                            style={{ marginLeft: "6px" }}
                          /> */}
                          <ArrowDown style={{ marginLeft: "6px" }} />
                        </button>
                      )}
                    </div>
                  )}
                </Col>
              ))}
          </Row>
          <div className="footer-btn">
            <button className="hero-btn" onClick={() => navigate()}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageContent;
