import React from 'react';
import { Menu } from 'antd';

const StickyNavbar = () => {
  return (
    <div className="sticky-header">
      <div className="container">
        <div className="justify-space-between">
          <div className="logo">
            <h2>UTI Online - RX</h2>
          </div>
          <Menu mode="horizontal" style={{borderBottom: '1px solid #FFF'}}>
            <Menu.Item>
              <a href="https://www.utio.edu.mx/">Home</a>
            </Menu.Item>
            <Menu.Item>
              <a href="https://www.utio.edu.mx/estudiantes/">Estudiantes</a>
            </Menu.Item>
            <Menu.Item>
              <a href="https://www.utio.edu.mx/administrativo/">Administrativo</a>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </div>
  )
}

export default StickyNavbar
