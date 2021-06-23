import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout, Col, Row } from "antd";
import LandingPage from "./containers/LandingPage";
import Request from "./containers/Request";
import Error from "./containers/Error";
import "antd/dist/antd.css";
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>UTI</Header>
      <Content>
        <Col>
          <Row span={24}>
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
          </Row>
        </Col>
      </Content>
      <Footer>UTI Online ©2021</Footer>
    </Layout>
  );
}

export default App;
