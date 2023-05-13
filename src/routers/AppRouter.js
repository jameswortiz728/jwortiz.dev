import React from 'react';
import DashboardPage from './../components/DashboardPage';
import AboutMePage from './../components/AboutMePage';
import ResumePage from './../components/ResumePage';
import ProjectsPage from './../components/ProjectsPage';
import ProjectItemPage from './../components/ProjectItemPage';
import NotFoundPage from './../components/NotFoundPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route exact path="/" element = {<DashboardPage/>}/>
                    <Route path="/aboutme" element = {<AboutMePage/>}/>
                    <Route path="/resume" element = {<ResumePage/>}/>
                    <Route exact path="/projects" element={<ProjectsPage/>}/>
                    <Route path="/projects/:title" element={<ProjectItemPage/>} />
                    <Route path='*' element={<NotFoundPage/>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
};

export default AppRouter;