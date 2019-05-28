import React, {Component} from 'react';
import {GridList} from '@material-ui/core'

class Complementos extends Component {
    render(){
        return (
            <GridList className="Complementos" cols={3}>
                <button>Papas a la francesa</button>
                <button>Aros de cebolla</button>
            </GridList>
        );
    }
}

export default Complementos;