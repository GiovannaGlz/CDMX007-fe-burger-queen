//Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom'

//Assets
import burger from './img/burger_icon.png';
import './css/Header.css';
// import { types } from 'util';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }
  render() {
    const {title} = this.props;

    return (
      <div className="Header">
        <div className="Burger">
        <img src={burger}/>
        <h6>{title}</h6>
        </div>
      </div>
    );
  }
}

export default Header;
