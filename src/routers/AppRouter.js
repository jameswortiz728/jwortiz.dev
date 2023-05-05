import React from 'react';
import DashboardPage from './../components/DashboardPage';
import LoginPage from './../components/LoginPage';
import NotFoundPage from './../components/NotFoundPage';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import PrivateRoute from  './PrivateRoute';
import PublicRoute from  './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component = {LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component = {DashboardPage}/>
                <PublicRoute component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;