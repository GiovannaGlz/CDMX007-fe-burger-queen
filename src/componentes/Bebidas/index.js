//Dependencias
import React, {Component} from 'react';

class Drink extends Component {
    render(){
        return (
            <div className="Drink">
                <button>Café americano</button>
                <button>Café con leche</button>
                <button>Jugo de frutas</button>
            </div>
        );
    }
}

export default Drink;