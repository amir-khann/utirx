import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Image, Checkbox } from "antd";
import { Link } from "react-router-dom";

import Summary from "./Summary";

const Consent = (props) => {
  const { terms, marketing, attestation } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="flex">
      <div className="back-container flex column sticky">
        <p className="link-button" onClick={() => props.decrementStep()}>
          Go Back
        </p>
        <div className="interview-left">
          <Image src="agreement.svg" preview={false} width={"75%"} style={{objectFit: 'contain'}}/>
        </div>
      </div>
      <div className="flex float-right consent-container">
        <div className="flex  column vh-90 consent">
          <div className="summary">
            <Summary questions={props.questions} answers={props.answers} />
          </div>
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
              I agree to <Link to="/terms">Terms</Link>,{" "}
              <Link to="/privacy">Privacy Policy</Link> and{" "}
              <Link to="/consent">Telehealth Consent</Link>.
            </Checkbox>
          </div>
          <div>
            <Checkbox
              onChange={(e) =>
                dispatch({ type: "SET_MARKETING", marketing: e.target.checked })
              }
              checked={marketing}
            >
              I agree to the <Link to="/marketing">HIPAA Marketing Authorization.</Link>
            </Checkbox>
          </div>
          <Button
            type="primary"
            disabled={!terms || !marketing || !attestation}
            onClick={() => props.incrementStep()}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Consent;
