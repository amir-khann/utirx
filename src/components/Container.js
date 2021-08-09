import React from "react";
import { Layout } from "antd";
const { Header, Content } = Layout;

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
