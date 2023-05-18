import React from 'react';
import DashboardPage from './../components/DashboardPage';
import AboutMePage from './../components/AboutMePage';
import ResumePage from './../components/ResumePage';
import ProjectsPage from './../components/ProjectsPage';
import MainPage from './../components/MainPage';
import ProjectItemPage from './../components/ProjectItemPage';
import NotFoundPage from './../components/NotFoundPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './../components/Header';
import Footer from './../components/Footer';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Routes>
                    <Route exact path="/" element = {<MainPage/>}/>
                    <Route path="/projects/:title" element={<ProjectItemPage/>} />
                    <Route path='*' element={<NotFoundPage/>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
};

export default AppRouter;