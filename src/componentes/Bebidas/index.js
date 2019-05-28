//Dependencias
import React, {Component} from 'react';
import { GridList } from '@material-ui/core';

class Drink extends Component {
    render(){
        return (
            <GridList className="Drink" cols={3}>
                <button>Café americano</button>
                <button>Café con leche</button>
                <button>Jugo de frutas</button>
            </GridList>
        );
    }
}

export default Drink;