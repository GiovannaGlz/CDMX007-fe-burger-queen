//Dependencias
import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Componentes
import App from './componentes/App';
import About from './componentes/About';
import Contact from './componentes/Contact';
import Home from './componentes/Home';
import Page404 from './componentes/Page404';

const AppRoutes = () =>
<App>
    <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/" component={Home} />
        <Route component={Page404} />
    </Switch>
</App>

export default AppRoutes;