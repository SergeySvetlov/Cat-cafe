import styled from "styled-components";
import { A } from "../../elements/index";

export const StyledButton = styled(A)`
    min-height: 60px;
    font-size: ${(props) => props.theme.fontSizeDefault};
    min-width: ${(props) => props.style.$minWidth || "100%"};
    max-width: 700px;
    padding: 15px;
    font-weight: 700;
    line-height: ${(props) => props.theme.lineHeight};
    color: ${(props) => props.theme.colorWhite};
    background-color: ${(props) => props.theme.colorButton};
    border: none;
    border-radius: 5px;
    background-image: none;
    box-shadow: none;
    transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;

    &:hover,
    &:active {
    background-color: ${(props) => props.theme.colorButtonHover};
    box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14);
    }

    &:active {
    box-shadow: none;
    }
`;