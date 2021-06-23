import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Error = () => {
  return (
    <Container>
      <p>
        Error! We cannot proceed with your request.{" "}
        <Link to="/request">Go back and Try again.</Link>
      </p>
    </Container>
  );
};

export default Error;
