import React, {Component} from 'react';
import {GridList, Button} from '@material-ui/core'

class Complementos extends Component {
    render(){
        return (
            <GridList className="Complementos" cols={3}>
            <Button variant="outlined" size="small">Papas a la francesa</Button>
            <Button variant="outlined" size="small">Aros de cebolla</Button>
            </GridList>
        );
    }
}

export default Complementos;