import React, {Component} from 'react';
import {GridList, Button} from '@material-ui/core'

class DrinkHam extends Component {
    render(){
        return (
            <GridList className="DrinkHam" cols={3}>
            <Button variant="outlined" size="small">Refresco</Button>
            <Button variant="outlined" size="small">Agua</Button>
            </GridList>
        );
    }
}

export default DrinkHam;