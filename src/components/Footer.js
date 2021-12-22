import React from 'react';

import { Menu } from 'antd';

const Footer = () => {
  return (
    <div className="container">
      <div className="flex justify-space-between column-on-mobile">
        <div className="logo">
          <h3>&copy; UTI Online - LLC 2021</h3>
        </div>
        <Menu mode="horizontal" style={{borderBottom: '1px solid #FFF'}}>
          <Menu.Item>
            <a href="/privacy">Privacy Policy</a>
          </Menu.Item>
          <Menu.Item>
            <a href="/terms">Terms of Use</a>
          </Menu.Item>
          {/*<Menu.Item>*/}
          {/*  <a href="/accessibility">Accessibility</a>*/}
          {/*</Menu.Item>*/}
        </Menu>
      </div>
    </div>
  )
}

export default Footer
