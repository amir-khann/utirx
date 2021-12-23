import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Image, Checkbox } from "antd";
import { Link } from "react-router-dom";

import Summary from "./Summary";

const Consent = (props) => {
  const { terms, marketing, attestation } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="flex responsive column-on-mobile">
      <div className="flex column sticky percent-50">
        <p className="link-button" onClick={() => props.decrementStep()}>
          Go Back
        </p>
        <div className="interview-left">
          <Image
            src="agreement.svg"
            preview={false}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <div className="back-container show-on-mobile-and-tablet">
        <p className="link-button" onClick={() => props.decrementStep()}>
          Go Back
        </p>
      </div>
      <div className="flex consent-container percent-50">
        <div className="flex  column vh-90 consent">
          <p className="consent-message">
            <b style={{margin: 0, padding: 0}}>Great! You are almost done.</b>
            Here is the summary of your responses.
            Please review these and make sure all of the information below is
            accurate.<br/> If you want to change any of your answers, you can click
            on "Go Back"
          </p>
          <div className="summary">
            <Summary questions={props.questions} answers={props.answers} />
          </div>
          <p className="warning-message">
            If all the information looks good, attest and accept the terms, and
            hit Continue.
          </p>
          <div>
            <Checkbox
              onChange={(e) =>
                dispatch({
                  type: "SET_ATTESTATION",
                  attestation: e.target.checked,
                })
              }
              checked={attestation}
            >
              I attest that the information that I have provided is true.
            </Checkbox>
          </div>
          <div>
            <Checkbox
              onChange={(e) =>
                dispatch({ type: "SET_TERMS", terms: e.target.checked })
              }
              checked={terms}
            >
              I agree to <Link to="/terms" target="_blank" style={{zIndex:1}}>Terms</Link>,{" "}
              <Link to="/privacy" target="_blank">Privacy Policy</Link> and{" "}
              <Link to="/consent" target="_blank">Telehealth Consent</Link>.
            </Checkbox>
          </div>
          <div>
            <Checkbox
              onChange={(e) =>
                dispatch({ type: "SET_MARKETING", marketing: e.target.checked })
              }
              checked={marketing}
            >
              I agree to the{" "}
              <Link to="/marketing" target="_blank">HIPAA Marketing Authorization.</Link>
            </Checkbox>
          </div>
          <Button
            type="primary"
            disabled={!terms || !marketing || !attestation}
            onClick={() => props.incrementStep()}
          >
            Continue
          </Button>
          <div className="extra-padding"></div>
        </div>
      </div>
    </div>
  );
};

export default Consent;
