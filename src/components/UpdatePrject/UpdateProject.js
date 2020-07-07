import React, { useContext } from "react";
import {
  Header,
  Container,
  Form,
  FormControl,
  Textarea,
  Button,
} from "./UpdateProject.styled";
import { ProjectContext } from "../../context/ProjectContext";
function UpdateProject(props) {
  const { dispatch, projects } = useContext(ProjectContext);

  const deleteProject = () => {
    dispatch({ type: "REMOVE_PROJECT", id: props.match.params.id });
  };
  console.log(props);
  return projects.map((project) => (
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
            //onChange={handelChange}
          />
        </FormControl>
        <FormControl>
          <label>Description</label>
          <Textarea
            type="text"
            placeholder="Descriptiont..."
            name="description"
            value={project.description}
            //onChange={handelChange}
          />
        </FormControl>
        <Button>Update</Button>
        <Button onClick={deleteProject}>Delete</Button>
      </Form>
    </Container>
  ));
}

export default UpdateProject;
