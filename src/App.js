import React from "react";
import {
  CreateProject,
  ProjectList,
  UpdateProject,
  NavBar,
} from "./components/";
import { Route } from "react-router-dom";
import ProjectContextProvider from "./context/ProjectContext";
import "./App.css";

function App() {
  return (
    <>
      <ProjectContextProvider>
        <div className="container">
          <NavBar />
          <Route exact={true} path="/" component={ProjectList} />
          <Route exact path="/create" component={CreateProject} />
          <Route exact path="/update/:id" component={UpdateProject} />
        </div>
      </ProjectContextProvider>
    </>
  );
}

export default App;
