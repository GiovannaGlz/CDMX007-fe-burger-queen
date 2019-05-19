//Dependencias
import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Componentes
import App from './componentes/App';
import Drink from './componentes/Bebidas';
import Dinner from './componentes/Desayuno';
import Hamburguesa from './componentes/Hamburguesas';

const AppRoutes = () =>
<App>
    <Switch>
        <Route exact path="/Hamburguesas" component={Hamburguesa} />
        <Route exact path="/Bebidas" component={Drink} />
        <Route exact path="/Desayuno" component={Dinner} />
    </Switch>
</App>

export default AppRoutes;