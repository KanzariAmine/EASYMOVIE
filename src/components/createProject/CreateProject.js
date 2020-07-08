import React, { useState, useContext } from "react";
import {
  Header,
  Container,
  Form,
  FormControl,
  Textarea,
  Button,
} from "./CreateProject.styled";
import { ProjectContext } from "../../context/ProjectContext";

function CreateProject() {
  const { dispatch } = useContext(ProjectContext);

  const [project, setProject] = useState({
    nom: "",
    description: "",
    duree: "",
  });

  const handelChange = (e) => {
    e.preventDefault();
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_PROJECT", project });
    setProject({ nom: "", description: "", duree: "" });
  };

  return (
    <Container>
      <Header>
        <h2>Ajouter Project</h2>
      </Header>
      <Form onSubmit={handelSubmit}>
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

        <Button>Ajouter</Button>
      </Form>
    </Container>
  );
}

export default CreateProject;
