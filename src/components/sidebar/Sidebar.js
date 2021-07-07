import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

export default function Sidebar(props) {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/category">
      Category
      </a>
      <a className="menu-item" href="/products">
      Productss
      </a>
      <a className="menu-item" href="/Orders">
      orders
      </a>
    </Menu>
  );
};