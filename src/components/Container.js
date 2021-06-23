import React from "react";
import { Layout, Col, Row } from "antd";
const { Header, Footer, Sider, Content } = Layout;

const Container = (props) => {
  return (
    <Layout>
      <Header>UTI</Header>
      <Content>{props.children}</Content>
      {/* <Footer>UTI Online ©2021</Footer> */}
    </Layout>
  );
};

export default Container;
