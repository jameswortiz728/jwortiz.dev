import React, { useContext } from 'react';
import ProjectListItem from './../components/ProjectListItem';
import ProjectsContext from '../context/projects-context';

const ProjectList = () => {
    const { projects } = useContext(ProjectsContext);

    return projects.map((project)=> (
        <ProjectListItem key={project.title} project={project}/>
    ))
};

export { ProjectList as default };