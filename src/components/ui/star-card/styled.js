import styled from "styled-components";
import { P } from "../../elements/index";

export const Article = styled.article`
  width: 353px;
  min-height: 525px;
  padding: 20px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.colorWhite};
  box-sizing: border-box;
`;

export const Figure = styled.figure`
  position: relative;
  margin: 0;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 313px;
  object-fit: contain;
  border-radius: 8px;
`;

export const CardText = styled(P)`
  margin-top: 7px;
  margin-bottom: 0;
`;
