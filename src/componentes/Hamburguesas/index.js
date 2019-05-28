//Dependencias
import React, {Component} from 'react';
import {GridList} from '@material-ui/core'

class Hamburguesa extends Component {
    render(){
        return (
            <GridList className="Hamburguesa" cols={3}>
                <button>Pollo</button>
                <button>Res</button>
                <button>Vegetariana</button>
            </GridList>
        );
    }
}

export default Hamburguesa;