import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import CreateProject from "./CreateProject";
import ProjectContextProvider, {
  ProjectContext,
} from "../../context/ProjectContext";

const renderWithContext = (component) => {
  return {
    ...render(
      <ProjectContextProvider value={ProjectContext}>
        {component}
      </ProjectContextProvider>
    ),
  };
};

afterEach(cleanup);

describe("Test Create Project Component", () => {
  test("Should take snapshot", () => {
    const { asFragment } = renderWithContext(<CreateProject />);
    expect(asFragment(<CreateProject />)).toMatchSnapshot();
  });
});
