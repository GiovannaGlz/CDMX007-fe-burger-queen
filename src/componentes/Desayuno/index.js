//Dependencias
import React, {Component} from 'react';
import { GridList, Button } from '@material-ui/core';
// import PropTypes from "prop-types";

class Dinner extends Component {
    // static propTypes = {
    //     items: PropTypes.array.isRequired
    //   };
    render(){
        return (
            <GridList className="Dinner" cols={3}>
                <Button variant="outlined" size="small">Sándwich</Button>
          </GridList>
        );
    }
}

export default Dinner;