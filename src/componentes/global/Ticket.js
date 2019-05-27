//Dependencias
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

//Assets
import './css/Footer.css';

class Ticket extends Component {
  // static propTypes = {
  //   copyright: PropTypes.string
  // }
  render() {
    // const {copyright = '&copy: React 2019'} = this.props;
    return (
      <div className="Ticket">
      <h4>Ticket</h4>
      <button>Cancelar</button>
      <button>Editar</button>
      <button>Confirmar</button>
        {/* <p dangerouslySetInnerHTML={{__html:copyright}}/> */}
      </div>
    );
  }
}

export default Ticket;
