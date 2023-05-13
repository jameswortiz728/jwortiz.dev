import React from 'react';
import { Link } from 'react-router-dom';

const ProjectListItem = ({ project }) => {

  const state = {
    title: project.title,
    name: project.name,
    description: project.description,
    link: project.link,
    image: project.image
  }

  return (
    <Link 
      className="list-item" 
      to={{ pathname: `/projects/${project.title}`}} 
      state = { state }
    >
      <div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>
    </Link>
  )
};

export { ProjectListItem as default };