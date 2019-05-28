//Dependencias
import React, { Component } from 'react';
import { Paper } from '@material-ui/core';

//Assets
import './css/Footer.css';

class Ticket extends Component {
  
  render() {
    return (
      <Paper className="Ticket">
      
      <h4>Ticket</h4>
      <button>Cancelar</button>
      <button>Editar</button>
      <button>Confirmar</button>
      </Paper>
      
    );
  }
}

export default Ticket;
