import React, { useContext } from "react";
import { ProjectContext } from "../../context/ProjectContext";
import { NavLink } from "react-router-dom";
function ProjectList() {
  const { projects } = useContext(ProjectContext);
  return projects.length ? (
    <div className="books_list">
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <NavLink to={`/update/${project.id}`}>
              <div className="nom">
                <h3>Nom: </h3>
                {project.nom}
              </div>
              <div className="description">
                <h5>description: </h5>
                {project.description}
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div>
      {" "}
      <h2>No Project :(</h2>
    </div>
  );
}

export default ProjectList;
