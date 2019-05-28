//Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

//Componentes
import Header from './global/Header';
import Content from './global/Content';
import Articles from './global/Articles';
import Ticket from './global/Ticket';

//data
import items from '../data/menu'

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <Header title="Burguer Queen" />
        <Grid container>
          <Grid item md>
            <Content items={items} />
          </Grid>
          <Grid item md>
            <Articles body={children}/>
          </Grid>
          <Grid item md>
            <Ticket />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
