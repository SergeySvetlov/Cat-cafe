import styled from "styled-components";
import mark from "../../../assets/mark.svg";
import spot from "../../../assets/spot.svg";
import frame from "../../../assets/frame.svg";
import { P } from "../../elements/index.js";

export const AboutSection = styled.section`
    display: flex;
    position: relative;
    padding-left: 90px;
    padding-top: 159px;
    padding-bottom: 159px;
    padding-right: 603px;
    background-color: ${(props) => props.theme.colorBackgroundLight};
    align-items: center;
    z-index: 1;
    box-sizing: border-box;
    &:after {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 90px;
        display: block;
        content: "";
        width: 446px;
        height: 446px;
        margin: auto;
        background: url(${frame}), url(${spot});
        background-repeat: no-repeat;
        background-position: 40% 40%;
    };
`;

export const Wrapper = styled(P)`
    position: relative;
    min-width: 650px;
    z-index: 3;
`;

export const AboutText = styled(P)`
    margin-top: 20px;
    padding-right: 122px;
    margin-bottom: 40px;
`;

export const WorkTime = styled(P)`
    display: inline-block;
    min-height: 43px;
    min-width: 292px;
    margin-bottom: 20px;
    padding: 8px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.colorBackgroundDark};
    vertical-align: middle;
`;

export const Address = styled(P)`
    &:before {
        display: inline-block;
        width: 16px;
        height: 16px;
        margin-right: 10px;
        content: "";        
        background: url(${mark});
        background-repeat: no-repeat;
    };
`;