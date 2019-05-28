//Dependencias
import React, {Component} from 'react';
import { GridList, Button } from '@material-ui/core';

class Drink extends Component {
    render(){
        return (
            <GridList className="Drink" cols={3}>
            <Button variant="outlined" size="small">Café americano</Button>
            <Button variant="outlined" size="small">Café con leche</Button>
            <Button variant="outlined" size="small">Jugo de frutas</Button>
            </GridList>
        );
    }
}

export default Drink;