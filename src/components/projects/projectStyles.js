import styled from "styled-components";
import colors from "../../globalStyles/colorStyles";

/*--------------- Project Container -------------------- */

export const ProjectsContainer = styled.section`
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

/*-------------------- Project Card -------------------------- */

export const ProjectCard = styled.div`
  border: solid ${colors.black} 3px;
  background-color: #f5fffa;
  margin-top: 20px;

  box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.6);
  -moz-box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.6);
  -webkit-box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.6);
  -o-box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.6);
  @media (min-width: 500px) {
    max-width: 400px;
    margin: 20px;
    width: 80%;
  }
`;
export const ProjectImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const ProjectInformation = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  min-height: 270px;
  justify-content: space-between;
`;
export const ProjectContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProjectHeader = styled.div`
  display: flex;
  justify-content: center;
`;

export const Detail = styled.h1`
  color: ${colors.black};
  font-size: 2em;
  text-align: center;
  margin-bottom: 15px;
`;

export const ProjectCardWrap = styled.div`
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

export const ProjectName = styled.h2``;

export const ProjectTechnologies = styled.p`
  margin-bottom: 20px;
`;

export const ProjectDetailText = styled.p`
  margin-bottom: 20px;
`;

const ParentBtn = styled.button`
  box-sizing: border-box;
  appearance: none;
  background-color: #20334c;
  border: 2px solid #d3dae4;
  border-radius: 30px;
  cursor: pointer;
`;

export const InheriteBtn = styled(ParentBtn)`
  color: #afc0c9;
  font-size: 18px;
  padding: 5px 10px;
  background-image: linear-gradient(45deg, #476176 50%, transparent 50%);
  background-position: 100%;
  background-size: 400%;
  transition: background 300ms ease-in-out;
  display: flex;
  align-items: center;
  &:hover {
    background-position: 0;
    color: #afc0c9;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: 1000px) {
  }
`;

export const IconSpan = styled.span`
  margin-right: 10px;
`;

export const ButtonText = styled.p`
  color: #afc0c9;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-weight: 400;
  @media (min-width: 1000px) {
    font-size: 0.9rem;
  }
`;