//Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Componentes
import Header from './global/Header';
import Content from './global/Content';
import Ticket from './global/Ticket';

//data
import items from '../data/menu'

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const {children} = this.props;
    return (
      <div className="App">
        <Header title="Burguer Queen" />
        <Content body={children} items={items}/>
        <Ticket />
      </div>
    );
  }
}

export default App;
