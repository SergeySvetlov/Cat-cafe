import styled from "styled-components";

export const StyledIcon = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  height: 43px;
  padding: 8px 16px;
  font-size: 18px;
  line-height: 27px;
  font-weight: 700;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) => props.backgroundColor};
  box-sizing: border-box;
  border-radius: 8px 8px 8px 0;
  text-transform: uppercase;
`;