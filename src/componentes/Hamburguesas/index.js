//Dependencias
import React, {Component} from 'react';
import {GridList, Button} from '@material-ui/core'

class Hamburguesa extends Component {
    render(){
        return (
            <GridList className="Hamburguesa" cols={3}>
            <Button variant="outlined" size="small">Pollo</Button>
            <Button variant="outlined" size="small">Res</Button>
            <Button variant="outlined" size="small">Vegetariana</Button>
            </GridList>
        );
    }
}

export default Hamburguesa;