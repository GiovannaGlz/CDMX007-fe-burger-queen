import React, { Component } from 'react';
import logo from '../global/img/logo.svg';
import './css/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Logo">
        <img src={logo}/>
        <h6>Hello word</h6>
        </div>
      </div>
    );
  }
}

export default Header;
