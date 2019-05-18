//Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Componentes
import Header from './global/Header';
import Content from './global/Content';
import Footer from './global/Footer';

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
        <Footer />
      </div>
    );
  }
}

export default App;
