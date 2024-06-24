import styled from "styled-components";
import { Ul, Li } from "../../elements/index.js";
import leaf from "../../../assets/leaf.svg";
import spot2 from "../../../assets/spot2.svg";
import paw from "../../../assets/paw.svg";

export const ListSection = styled.section`
    position: relative;
    display: flex;
    padding: 100px 90px 80px 9px;
    background-color: ${(props) => props.theme.colorBackgroundDark};
    background-position: left bottom;
    background-size: 449px 304px;
    background-repeat: no-repeat;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    box-sizing: border-box;
    background-image: url(${spot2});

    &:before {
        position: absolute;
        top: 36px;
        left: 0;
        width: 213px;
        height: 170px;
        content: "";
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(${paw});
    }
      
    &:after {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 111px;
        height: 158px;
        content: "";
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(${leaf});
    }
`;

export const List = styled(Ul)`
    margin-top: 44px;
    margin-bottom: 44px;
    margin-left: -20px;
    font-size: 0;
    line-height: 0;
    text-align: center;
`;

export const Item = styled(Li)`
    display: inline-block;
    margin-left: 20px;
    margin-top: 20px;
    font-size: 18px;
    line-height: 27px;
    vertical-align: top;
    text-align: left;
    overflow: hidden;
`;