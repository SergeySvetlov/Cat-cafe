import styled from "styled-components";
import Button from "../../ui/button/button";

export const StyledButton = styled(Button)`
  width: auto;
  min-width: 0;
  display: inline-block;
  background-color: transparent;
  color: ${(props) => props.theme.colorBlack};
  font-size: 18px;

  &:hover,
  &:active {
    background-color: transparent;
    text-decoration: underline;
  }

  &:hover {
    box-shadow: none;
  }
`;