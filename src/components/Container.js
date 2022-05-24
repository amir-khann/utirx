import React from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/svgs/white-logo.svg";
const { Content, Header } = Layout;

const Container = (props) => {
  return (
    <Layout>
      <Header style={{ position: "sticky", top: 0, zIndex: 1,background:"#0A91BF" }}>
        <Link to="/" className="logo-app">
          <div style={{ display: "flex", alignItems: "center" }}>
            <Logo /> UTIRX.com
          </div>
        </Link>
      </Header>
      <Content>{props.children}</Content>
      {/* <Footer>UTI Online ©2021</Footer> */}
    </Layout>
  );
};

export default Container;
