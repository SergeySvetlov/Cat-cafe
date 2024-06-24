import styled from "styled-components";
import { A } from "../../elements/index";

export const LogoLink = styled(A)`
  display: flex;
  height: 44px;
  align-items: center;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

export const LogoText = styled.span`
  display: flex;
  height: 44px;
  margin-left: 24px;
  font-weight: 700;
  font-size: 28px;
  line-height: 42px;
  color: ${(props) => props.theme.colorBlack};
`;
