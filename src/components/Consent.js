import React, { useState } from "react";
import { Button, Image, Checkbox } from "antd";
import { Link } from "react-router-dom";

const Consent = (props) => {
  const [terms, setTerms] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [attestation, setAttestation] = useState(false);
  return (
    <div className="flex column">
      <div className="back-container">
        <p className="link-button" onClick={() => props.decrementStep()}>
          Go Back
        </p>
      </div>
      <div className="flex responsive">
        <div className="interview">
          <Image src="agreement.svg" preview={false} width={"90%"} />
        </div>
        <div className="flex  column vh-90 consent">
          <div>
            <Checkbox onChange={(e) => setAttestation(e.target.checked)}>
              I attest that the information that I have provided is true.
            </Checkbox>
          </div>
          <div>
            <Checkbox onChange={(e) => setTerms(e.target.checked)}>
              I agree to <Link to="">Terms</Link>,{" "}
              <Link to="">Privacy Policy</Link> and{" "}
              <Link to="">Telehealth Consent</Link>.
            </Checkbox>
          </div>
          <div>
            <Checkbox onChange={(e) => setMarketing(e.target.checked)}>
              I agree to the <Link to="">HIPAA Marketing Authorization.</Link>
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
