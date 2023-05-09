import React from 'react'

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import { Home, Login, Products, Register, Cart, Admin } from '../containers'
import PrivateRoute from './private-route'
import paths from '../constants/paths'

function Routes() {

    return (
        <Router>
            <Switch>
                <Route component={Login} path='/login' />
                <Route component={Register} path='/cadastro' />
                <PrivateRoute exact component={Home} path='/' />
                <PrivateRoute component={Products} path='/produtos' />
                <PrivateRoute component={Cart} path='/carrinho' />


                <PrivateRoute component={Admin} path={paths.order} isAdmin />
                <PrivateRoute component={Admin} path={paths.products} isAdmin />
                <PrivateRoute component={Admin} path={paths.newProduct} isAdmin />
                <PrivateRoute component={Admin} path={paths.editProduct} isAdmin />
            </Switch>
        </Router>
    )

}

export default Routes