import React from "react";
import styled from "styled-components";
import colors from "../../globalStyles/colorStyles";
import { projectData } from "./projectData";
import ProjectCard from "./ProjectCard";

export const ProjectsSectionContainer = styled.section`
  background-color: ${colors.lightGray};
  display: flex;
  padding: 50px 40px;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  @media (min-width: 1000px) {
    padding: 50px 60px;
  }
`;

export const ProjectText = styled.h1`
  color: ${colors.black};
  font-size: 2em;
  text-align: center;
  margin-bottom: 15px;
`;

export const ProjectCardContainer = styled.div`
  height: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

const ProjectsSection = () => {
  return (
    <ProjectsSectionContainer id="projects">
      <ProjectText>PROJECTS</ProjectText>
      <ProjectCardContainer>
        {projectData.map((project) => (
          <ProjectCard key={project.projectName} project={project} />
        ))}
      </ProjectCardContainer>
    </ProjectsSectionContainer>
  );
};

export default ProjectsSection;
