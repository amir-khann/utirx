import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { Image } from 'antd'

const Error = () => {
  return (
    <Container>
      <div className="flex align-center vh-90">
        <div className="interview">
          <Image src="error.svg" preview={false} width={"90%"} />
        </div>
        <div className="error-content">
          <h2 className="error">Error!</h2>
          <p>We cannot proceed with your request.</p>
          <Link to="/request">Go back and Try again.</Link>
        </div>
      </div>
    </Container>
  );
};

export default Error;
