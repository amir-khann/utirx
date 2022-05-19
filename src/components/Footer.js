import React from 'react';

import { Menu } from 'antd';
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div className="container">
      <div className="flex justify-space-between column-on-mobile">
        <div className="logo">
          <h3>&copy; UTI RX - LLC 2022</h3>
        </div>
        <Menu mode="horizontal" style={{borderBottom: '1px solid #FFF'}}>
          {/*<Menu.Item>*/}
          {/*  <Link to="/marketing" target="_blank" >Authorization for Use and Disclosure of Information</Link>*/}
          {/*</Menu.Item>*/}
          {/*<Menu.Item>*/}
          {/*  <Link to="/consent" target="_blank" rel="noreferrer">Telehealth Informed Consent</Link>*/}
          {/*</Menu.Item>*/}
          <Menu.Item>
            <Link to="/privacy" target="_blank" rel="noreferrer">Privacy Policy</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/terms" target="_blank" rel="noreferrer">Terms of Use</Link>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  )
}

export default Footer
