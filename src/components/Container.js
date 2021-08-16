import React from "react";
import { Layout } from "antd";
const { Content, Header } = Layout;

const Container = (props) => {
  return (
    <Layout>
      <Header><img src="pharmacy.png" alt="pharmacy" /> UTI - Online Clinic</Header>
      <Content>{props.children}</Content>
      {/* <Footer>UTI Online ©2021</Footer> */}
    </Layout>
  );
};

export default Container;
