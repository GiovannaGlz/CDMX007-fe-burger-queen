//Dependencias
import React, {Component} from 'react';

class Hamburguesa extends Component {
    render(){
        return (
            <div className="Hamburguesa">
                <button>Pollo</button>
                <button>Res</button>
                <button>Vegetariana</button>
            </div>
        );
    }
}

export default Hamburguesa;