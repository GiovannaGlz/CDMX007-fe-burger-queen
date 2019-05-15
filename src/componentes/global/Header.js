//Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

//Assets
import burger from '../global/img/burger_icon.png';
import './css/Header.css';
import { types } from 'util';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  }
  render() {
    const {title, items} = this.props;

    return (
      <div className="Header">
        <div className="Burger">
        <img src={burger}/>
        <h6>{title}</h6>
        <ul className="Menu">
        {
          items && items.map(
            (item, key) => <li key={key}><Link to={item.url}>{item.title}</Link></li>)}
        </ul>
        </div>
      </div>
    );
  }
}

export default Header;
