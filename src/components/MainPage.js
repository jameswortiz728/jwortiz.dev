import React from 'react';
import DashboardPage from './../components/DashboardPage';
import AboutMePage from './../components/AboutMePage';
import ResumePage from './../components/ResumePage';
import ProjectsPage from './../components/ProjectsPage';

const MainPage = () => (
    <div>
        <DashboardPage/>
        <AboutMePage/>
        <ProjectsPage/>
        <ResumePage/>
    </div>
);

export default MainPage;