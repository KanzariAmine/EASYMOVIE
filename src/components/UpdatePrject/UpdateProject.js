import React, { useContext, useEffect, useState } from "react";
import {
  Header,
  Container,
  Form,
  FormControl,
  Textarea,
  Button,
} from "./UpdateProject.styled";
import { Link } from "react-router-dom";
import { ProjectContext } from "../../context/ProjectContext";

function UpdateProject(props) {
  const [project, setProject] = useState({});

  const { dispatch, projects } = useContext(ProjectContext);

  useEffect(() => {
    let projectFind = projects.filter(
      (item) => item.id === props.match.params.id
    );

    let find = projectFind[0];
    setProject(find);
  }, [projects, props.match.params.id]);

  const handelChange = (e) => {
    e.preventDefault();
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const updateProject = () => {
    dispatch({ type: "UPDATE_PROJECT", project });
  };
  const deleteProject = () => {
    dispatch({ type: "REMOVE_PROJECT", id: props.match.params.id });
  };
  return (
    <Container>
      <Header>
        <h2>Update Project</h2>
      </Header>
      <Form>
        <FormControl>
          <label>Nom</label>
          <input
            type="text"
            placeholder="Ajouter le nom du project"
            id="nom"
            name="nom"
            value={project.nom}
            onChange={handelChange}
          />
        </FormControl>
        <FormControl>
          <label>Durée</label>
          <input
            type="number"
            placeholder="Durée du vidéo minutes..."
            name="duree"
            value={project.duree}
            onChange={handelChange}
          />
        </FormControl>
        <FormControl>
          <label>Description</label>
          <Textarea
            type="text"
            placeholder="Descriptiont..."
            name="description"
            value={project.description}
            onChange={handelChange}
          />
        </FormControl>
        <Link to="/">
          <Button onClick={updateProject}>Update</Button>
        </Link>

        <Link to="/">
          <Button onClick={deleteProject}>Delete</Button>
        </Link>
      </Form>
      <div style={{ padding: "20px" }}>
        <img src={project.url} alt="test" style={{ width: "100%" }} />
      </div>
    </Container>
  );
}

export default UpdateProject;
