import React, { Fragment } from 'react'

import {BrowserRouter, Route, Switch, useLocation} from 'react-router-dom';
//Importamos las paginas
import Login from '../pages/login/Login';
import Network from '../pages/network/Network';
import Start from '../pages/start/Start';
import Error404 from '../pages/error/Error404';

//
import { AnimatePresence } from "framer-motion";

//==============================
const Routes = () => {
    //Invocamos LOCATION para saber en que direccion se encuentra el navegador
    const location = useLocation();

    return ( 
        <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
                <Route 
                    path='/'
                    component={Login}
                    exact={true}
                />
                <Route 
                    path='/network'
                    component={Network}
                    exact={true}
                />
                <Route 
                    path='/start'
                    component={Start}
                    exact={true}
                />
                <Route 
                    component={Error404}
                />
            </Switch>
        </AnimatePresence> 
     );
}
 
export default Routes;