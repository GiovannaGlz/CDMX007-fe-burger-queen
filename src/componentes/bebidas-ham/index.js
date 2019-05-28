import React, {Component} from 'react';
import {GridList} from '@material-ui/core'

class DrinkHam extends Component {
    render(){
        return (
            <GridList className="DrinkHam" cols={3}>
                <button>Agua</button>
                <button>Refresco</button>
            </GridList>
        );
    }
}

export default DrinkHam;