import styled from "styled-components";

export const BackGroundImager = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  position: relative;
  background: ${({ open }) =>
    open ? "rgba(172, 146, 137, 0.9)" : "transparent"};
  transition: all 0.6s ease-in-out;
`;
