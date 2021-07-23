import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import {
  ProjectCardContainer,
  ProjectImage,
  ProjectInformation,
  ProjectContentContainer,
  ProjectName,
  ProjectTechnologies,
  ProjectDetailText,
  BtnContainer,
  InheriteBtn,
  IconSpan,
} from "./projectStyles";

const ProjectCard = (props) => {
  return (
    <ProjectCardContainer>
      <ProjectImage src={props.project.imgUrl} />
      <ProjectInformation>
        <ProjectContentContainer>
          <ProjectName>{props.project.projectName}</ProjectName>
          <ProjectTechnologies>
            <span>Technologies: </span>
            {props.project.technologies}
          </ProjectTechnologies>
          <ProjectDetailText>{props.project.detail}</ProjectDetailText>
        </ProjectContentContainer>
        <BtnContainer>
          <a
            href={props.project.appLink}
            target="_blank"
            rel="noreferrer"
            aria-label="link to my project demo"
            style={{ textDecoration: "none" }}
          >
            <InheriteBtn>
              <IconSpan>
                <CgWebsite size="30px" />
              </IconSpan>
              Demo
            </InheriteBtn>
          </a>
          {props.project.ghFrontEndLink && (
            <a
              href={props.project.ghFrontEndLink}
              target="_blank"
              rel="noreferrer"
              aria-label="link to my gitHub frontend code"
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
          {props.project.ghBackEndLink && (
            <a
              href={props.project.ghBackEndLink}
              target="_blank"
              rel="noreferrer"
              aria-label="link to my gitHub backend code"
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
    </ProjectCardContainer>
  );
};

export default ProjectCard;
