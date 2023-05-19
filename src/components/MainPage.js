import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DashboardPage from './../components/DashboardPage';
import AboutMePage from './../components/AboutMePage';
import ResumePage from './../components/ResumePage';
import ProjectsPage from './../components/ProjectsPage';
import handleScrollTo from '../functions/handleScrollTo';

const MainPage = () => {
    const location = useLocation();

    useEffect(() => {
        if(location.state) {
            handleScrollTo(location.state.id);
        }
    }); 

    return (
        <div>
            <DashboardPage/>
            <AboutMePage/>
            <ProjectsPage/>
            <ResumePage/>
        </div>
    )
};

export default MainPage;