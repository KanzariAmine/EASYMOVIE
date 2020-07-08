import React, { useContext } from "react";
import { ProjectContext } from "../../context/ProjectContext";
import { NavLink } from "react-router-dom";
import { CardContainer, CardBody, Card } from "./ProjectList.styled";

function ProjectList() {
  const { projects } = useContext(ProjectContext);

  return projects.length ? (
    <div>
      <CardContainer>
        {projects.map((project) => {
          return (
            <Card key={project.id}>
              <NavLink to={`/update/${project.id}`}>
                <img
                  src={project.url}
                  alt=""
                  style={{
                    width: "100%",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                />
              </NavLink>
              <CardBody>
                <h2>Nom:</h2>
                <p>{project.nom}</p>
                <h2>Dureé: </h2>
                <p>{project.duree} min</p>
                <h2>Description: </h2>
                <p style={{ textAlign: "justify" }}>{project.description}</p>
              </CardBody>
            </Card>
          );
        })}
      </CardContainer>
    </div>
  ) : (
    <h2>Sorry No Project :(</h2>
  );
}

export default ProjectList;
