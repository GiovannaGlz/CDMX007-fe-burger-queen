//Dependencias
import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Componentes
import App from './componentes/App';
import About from './componentes/Hamburguesas';
import Contact from './componentes/Bebidas';
import Dinner from './componentes/Desayuno';

const AppRoutes = () =>
<App>
    <Switch>
        <Route exact path="/Hamburguesas" component={About} />
        <Route exact path="/Bebidas" component={Contact} />
        <Route exact path="/Desayuno" component={Dinner} />
    </Switch>
</App>

export default AppRoutes;