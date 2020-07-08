import { v4 as uuidv4 } from "uuid";

export const projectReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      return [
        ...state,
        {
          url: "https://picsum.photos/200/200",
          nom: action.project.nom,
          description: action.project.description,
          duree: action.project.duree,
          id: uuidv4(),
        },
      ];
    case "UPDATE_PROJECT":
      let projectUpdated = action.project;
      let UpdatedProjects = state.map((project) => {
        if (project.id === projectUpdated.id) {
          return projectUpdated;
        }
        return project;
      });
      let test = UpdatedProjects[0];

      return [...state, test];

    case "REMOVE_PROJECT":
      return state.filter((project) => project.id !== action.id);
    default:
      return state;
  }
};
