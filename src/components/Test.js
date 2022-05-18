import React, { useState, useEffect } from "react";
import { Button, Image, Card, Collapse, Row, Col } from "antd";
import axios from "axios";
import { ReactComponent as Clock } from "../assets/svgs/clock.svg";
import { ReactComponent as VectorTwo } from "../assets/svgs/Vector2.svg";
import { ReactComponent as Pick } from "../assets/svgs/pick.svg";
import Loader from "./Loader";
import config from "../config";
import questions from "./questions";

const Test = ({ navigate }) => {
  const [price, setPrice] = useState(0);
  const [key, setKey] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  console.log(key);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`${config.baseUrl}settings/price`);
      setPrice(data.price);
      setIsLoading(false);
    })();
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <div className="home-wrapper">
      <div className="container content">
        <div className="logo">
          <img src="vector.png" alt="logo" />
          <span>UTIRX</span>
        </div>
        <div className="flex hero-section">
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
            <img src="pngwing.png" alt="" />
          </div>
        </div>
      </div>
      <div className="container-wrapper">
        <div className="container">
          <Row gutter={[24, 16]}>
            <Col sm={24} md={12} xl={6} className="feature-content">
              <div style={{ width: 52, marginRight: "2%" }}>
                <Pick />
              </div>
              <div>
                <h2>Get connected</h2>
                <p>Get connected to a provider within minutes.</p>
              </div>
            </Col>
            <Col sm={24} md={12} xl={6} className="feature-content">
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
            <Col sm={24} md={12} xl={6} className="feature-content">
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
            <Col sm={24} md={12} xl={6} className="feature-content">
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
      <div className="container frequently">
        <h1>Frequently Asked</h1>
        <Row gutter={[32, 48]} justify="space-between">
          {questions &&
            questions.map((qu, index) => (
              <Col sm={24} md={10}>
                <h2>{qu.question}</h2>
                <p className={index === key && "animation"}>
                  {index === key
                    ? qu.answer
                    : qu.answer.length > 100
                    ? qu.answer.slice(0, 99) + "......."
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
                        <img
                          src="vector 5.png"
                          alt="arrow"
                          style={{ marginLeft: "6px" }}
                        />
                      </button>
                    )}
                  </div>
                )}
              </Col>
            ))}
          {/* <Col sm={24} md={10}>
            <h2>What is a UTI?</h2>
            <p>
              A urinary tract infection, or UTI, is an infection in any part of
              your urinary tract. UTIs commonly occur in women when bacteria
              enter the urinary tract.......
            </p>
            <div style={{ textAlign: "right" }}>
              <a href="#" style={{ color: "#0C90BD" }}>
                Read More
                <img
                  src="vector 5.png"
                  alt="arrow"
                  style={{ marginLeft: "6px" }}
                />
              </a>
            </div>
          </Col> */}

          {/* <Col sm={24} md={10}>
            <h2>What is a UTI?</h2>
            <p>
              A urinary tract infection, or UTI, is an infection in any part of
              your urinary tract. UTIs commonly occur in women when bacteria
              enter the urinary tract.......
            </p>
            <div style={{ textAlign: "right" }}>
              <a href="#" style={{ color: "#0C90BD" }}>
                Read More
                <img
                  src="vector 5.png"
                  alt="arrow"
                  style={{ marginLeft: "6px" }}
                />
              </a>
            </div>
          </Col>
          <Col sm={24} md={10}>
            <h2>What is a UTI?</h2>
            <p>
              A urinary tract infection, or UTI, is an infection in any part of
              your urinary tract. UTIs commonly occur in women when bacteria
              enter the urinary tract.......
            </p>
            <div style={{ textAlign: "right" }}>
              <a href="#" style={{ color: "#0C90BD" }}>
                Read More
                <img
                  src="vector 5.png"
                  alt="arrow"
                  style={{ marginLeft: "6px" }}
                />
              </a>
            </div>
          </Col>
          <Col sm={24} md={10}>
            <h2>What is a UTI?</h2>
            <p>
              A urinary tract infection, or UTI, is an infection in any part of
              your urinary tract. UTIs commonly occur in women when bacteria
              enter the urinary tract.......
            </p>
            <div style={{ textAlign: "right" }}>
              <a href="#" style={{ color: "#0C90BD" }}>
                Read More
                <img
                  src="vector 5.png"
                  alt="arrow"
                  style={{ marginLeft: "6px" }}
                />
              </a>
            </div>
          </Col>
          <Col sm={24} md={10}>
            <h2>What is a UTI?</h2>
            <p>
              A urinary tract infection, or UTI, is an infection in any part of
              your urinary tract. UTIs commonly occur in women when bacteria
              enter the urinary tract.......
            </p>
            <div style={{ textAlign: "right" }}>
              <a href="#" style={{ color: "#0C90BD" }}>
                Read More
                <img
                  src="vector 5.png"
                  alt="arrow"
                  style={{ marginLeft: "6px" }}
                />
              </a>
            </div>
          </Col>
          <Col sm={24} md={10}>
            <h2>What is a UTI?</h2>
            <p>
              A urinary tract infection, or UTI, is an infection in any part of
              your urinary tract. UTIs commonly occur in women when bacteria
              enter the urinary tract.......
            </p>
            <div style={{ textAlign: "right" }}>
              <a href="#" style={{ color: "#0C90BD" }}>
                Read More
                <img
                  src="vector 5.png"
                  alt="arrow"
                  style={{ marginLeft: "6px" }}
                />
              </a>
            </div>
          </Col>
          <Col sm={24} md={10}>
            <h2>What is a UTI?</h2>
            <p>
              A urinary tract infection, or UTI, is an infection in any part of
              your urinary tract. UTIs commonly occur in women when bacteria
              enter the urinary tract.......
            </p>
            <div style={{ textAlign: "right" }}>
              <a href="#" style={{ color: "#0C90BD" }}>
                Read More
                <img
                  src="vector 5.png"
                  alt="arrow"
                  style={{ marginLeft: "6px" }}
                />
              </a>
            </div>
          </Col>

          <Col sm={24} md={10}>
            <h2>What is a UTI?</h2>
            <p>
              A urinary tract infection, or UTI, is an infection in any part of
              your urinary tract. UTIs commonly occur in women when bacteria
              enter the urinary tract.......
            </p>
            <div style={{ textAlign: "right" }}>
              <a href="#" style={{ color: "#0C90BD" }}>
                Read More
                <img
                  src="vector 5.png"
                  alt="arrow"
                  style={{ marginLeft: "6px" }}
                />
              </a>
            </div>
          </Col>
          <Col sm={24} md={10}>
            <h2>What is a UTI?</h2>
            <p>
              A urinary tract infection, or UTI, is an infection in any part of
              your urinary tract. UTIs commonly occur in women when bacteria
              enter the urinary tract.......
            </p>
            <div style={{ textAlign: "right" }}>
              <a href="#" style={{ color: "#0C90BD" }}>
                Read More
                <img
                  src="vector 5.png"
                  alt="arrow"
                  style={{ marginLeft: "6px" }}
                />
              </a>
            </div>
          </Col>
          <Col sm={24} md={10}>
            <h2>What is a UTI?</h2>
            <p>
              A urinary tract infection, or UTI, is an infection in any part of
              your urinary tract. UTIs commonly occur in women when bacteria
              enter the urinary tract.......
            </p>
            <div style={{ textAlign: "right" }}>
              <a href="#" style={{ color: "#0C90BD" }}>
                Read More
                <img
                  src="vector 5.png"
                  alt="arrow"
                  style={{ marginLeft: "6px" }}
                />
              </a>
            </div>
          </Col>
          <Col sm={24} md={10}>
            <h2>What is a UTI?</h2>
            <p>
              A urinary tract infection, or UTI, is an infection in any part of
              your urinary tract. UTIs commonly occur in women when bacteria
              enter the urinary tract.......
            </p>
            <div style={{ textAlign: "right" }}>
              <a href="#" style={{ color: "#0C90BD" }}>
                Read More
                <img
                  src="vector 5.png"
                  alt="arrow"
                  style={{ marginLeft: "6px" }}
                />
              </a>
            </div>
          </Col> */}
        </Row>
        <div className="footer-btn">
          <button className="hero-btn" onClick={() => navigate()}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Test;
