import { Project } from "../types/project";

export const fetchProjects = async (): Promise<Project[]> => {
  const response = await fetch("/data/projects.json");
  if (!response.ok) {
    throw new Error("Projeler yuklenirken bir hata olustu.");
  }
  return response.json();
};
