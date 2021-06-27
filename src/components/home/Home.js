import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import Content from "../content/Content";
import {
  IconArrowDown,
  Bounce,
  ArrowWrapper,
  ParagraphContainer,
  TextSpan,
} from "./aboutMeStyles";

const Home = () => {
  return (
    <div>
      <Content>
        <ParagraphContainer>
          Hi! My name is <TextSpan>Nuanjan,</TextSpan> <br />
          or you can call me <TextSpan>Noon.</TextSpan> <br />
          <br />I am a Software Engineer (Frontend Focus). I have experience
          working on HTML, CSS,JavaScript, React, using public APIs, creating my
          own APIs and API testing. I am a problem solver. I work well under
          pressure, and I am eager to learn the new technologies. I'm excited to
          continue growing my skills. One thing you can count on is the strong
          work ethic that I will bring with me everyday.
          <br />
        </ParagraphContainer>
        <ArrowWrapper>
          <Bounce>
            <IconArrowDown>
              <h3 style={{ color: "#4f4a41", marginLeft: "-30px" }}>
                See my Project
              </h3>
              <IoIosArrowDown size="60px" color="#4f4a41" />
            </IconArrowDown>
          </Bounce>
        </ArrowWrapper>
      </Content>
    </div>
  );
};

export default Home;
