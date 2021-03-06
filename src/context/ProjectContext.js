import React, { createContext, useReducer } from "react";
import { projectReducer } from "../reducers/projectReducer";

export const ProjectContext = createContext();

const ProjectContextProvider = (props) => {
  const [projects, dispatch] = useReducer(projectReducer, []);

  return (
    <ProjectContext.Provider value={{ projects, dispatch }}>
      {props.children}
    </ProjectContext.Provider>
  );
};
export default ProjectContextProvider;
