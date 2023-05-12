import React from 'react';
import DashboardPage from './../components/DashboardPage';
import AboutMePage from './../components/AboutMePage';
import ResumePage from './../components/ResumePage';
import ProjectsPage from './../components/ProjectsPage';
import NotFoundPage from './../components/NotFoundPage';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'


export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component = {DashboardPage} exact={true}/>
                <Route path="/aboutme" component = {AboutMePage}/>
                <Route path="/resume" component = {ResumePage}/>
                <Route path="/projects" component = {ProjectsPage}/>
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;