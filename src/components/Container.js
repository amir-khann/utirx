import React from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";
const { Content, Header } = Layout;

const Container = (props) => {
  return (
    <Layout>
      <Header style={{position: 'sticky', top: 0, zIndex: 1}}><Link to="/" className="logo-app"><img src="pharmacy.png" alt="pharmacy" /> UTIRX.com LLC </Link></Header>
      <Content>{props.children}</Content>
      {/* <Footer>UTI Online ©2021</Footer> */}
    </Layout>
  );
};

export default Container;
