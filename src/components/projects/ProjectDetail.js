import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import {
  ProjectCard,
  ProjectImage,
  ProjectInformation,
  ProjectContentContainer,
  ProjectName,
  ProjectTechnologies,
  ProjectDetailText,
  BtnContainer,
  InheriteBtn,
  IconSpan,
  ProjectCardWrap,
} from "./projectStyles";
import { ProjectData } from "./ProjectData";

const ProjectDetail = () => {
  const portData = ProjectData.map((port, index) => (
    <ProjectCard key={index}>
      <ProjectImage src={port.imgUrl} />
      <ProjectInformation>
        <ProjectContentContainer>
          <ProjectName>{port.projectName}</ProjectName>
          <ProjectTechnologies>
            <span>Technologies: </span>
            {port.technologies}
          </ProjectTechnologies>
          <ProjectDetailText>{port.detail}</ProjectDetailText>
        </ProjectContentContainer>
        <BtnContainer>
          <a
            href={port.appLink}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <InheriteBtn>
              <IconSpan>
                <CgWebsite size="30px" />
              </IconSpan>
              Demo
            </InheriteBtn>
          </a>
          {port.ghFrontEndLink && (
            <a
              href={port.ghFrontEndLink}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <InheriteBtn>
                <IconSpan>
                  <FaGithub size="30px" />
                </IconSpan>
                Code
              </InheriteBtn>
            </a>
          )}
          {port.ghBackEndLink && (
            <a
              href={port.ghBackEndLink}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <InheriteBtn>
                <IconSpan>
                  <FaGithub size="30px" />
                </IconSpan>
                Code
              </InheriteBtn>
            </a>
          )}
        </BtnContainer>
      </ProjectInformation>
    </ProjectCard>
  ));

  return <ProjectCardWrap>{portData}</ProjectCardWrap>;
};

export default ProjectDetail;