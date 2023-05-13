const projectsReducer = (state, action) => {
    switch (action.type) {
      case 'POPULATE_PROJECTS':
        return action.projects;
      default:
        return state
    }
};
  
export { projectsReducer as default };