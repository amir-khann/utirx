import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./containers/LandingPage";
import Request from "./containers/Request";
import Error from "./containers/Error";
import "antd/dist/antd.less";
import Privacy from "./containers/Privacy";
import Terms from "./containers/Terms";
import Consent from "./containers/Consent";
import Marketing from "./containers/Marketing";
import Container from "./components/Container";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/request">
          <Request />
        </Route>
        <Route path="/error">
          <Error />
        </Route>
        <Route path="/privacy">
          <Container>
            <Privacy />
          </Container>
        </Route>
        <Route path="/terms">
          <Container>
            <Terms />
          </Container>
        </Route>
        <Route path="/consent">
          <Container>
            <Consent />
          </Container>
        </Route>
        <Route path="/marketing">
          <Container>
            <Marketing />
          </Container>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
