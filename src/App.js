import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./containers/LandingPage";
import Request from "./containers/Request";
import Error from "./containers/Error";
import "antd/dist/antd.css";

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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
