import React from "react";
import { ProjectsContainer, ProjectText } from "./projectStyles";
import ProjectDetail from "./ProjectDetail";

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectText>PROJECTS</ProjectText>
      <ProjectDetail />
    </ProjectsContainer>
  );
};

export default Projects;
