import React, { useEffect, useReducer } from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';
import projectsFixture from './../fixtures/projects';
import projectsReducer from './../reducers/projects';
import ProjectList from './../components/ProjectList';
import ProjectsContext from '../context/projects-context';

const ProjectsPage = () => {
    const [projects, dispatch] = useReducer(projectsReducer, [])

    useEffect(() => {
        const projects = projectsFixture;
        dispatch({ type: 'POPULATE_PROJECTS', projects});
    }, []);

    return (
        <ProjectsContext.Provider value={{ projects, dispatch }}>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Projects</h1>
                </div>
            </div>
            <div className="content-container">
                 <ProjectList/>
            </div>
        </ProjectsContext.Provider>
    )
};

export default ProjectsPage;