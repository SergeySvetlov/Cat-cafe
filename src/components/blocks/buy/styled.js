import styled, { css } from "styled-components";
import spot4 from "../../../assets/spot4.svg";
import spot5 from "../../../assets/spot5.svg";
import cat from "../../../assets/cat.svg";
import Title from "../../ui/title/title.jsx";
import Button from "../../ui/button/button.jsx";
import { Ul } from "../../elements/index.js";


export const BuySection = styled.section`
    position: relative;
    padding: 100px 90px 100px 90px;
    background-color: ${(props) => props.theme.colorBackgroundLight};
    background-image: url(${spot4});
    background-repeat: no-repeat;
    background-position: 0 100%;
    overflow: hidden;

    &:before {
        position: absolute;
        top: 177px;
        right: 90px;
        display: block;
        content: "";
        width: 443px;
        height: 468px;
        margin: auto;
        background-image: url(${spot5});
        background-repeat: no-repeat;
    };
    &:after {
        position: absolute;
        top: 277px;
        right: 90px;
        display: block;
        content: "";
        width: 447px;
        height: 409px;
        margin: auto;
        background-image: url(${cat});
        background-repeat: no-repeat;
    };
`;

export const BuyTitle = styled(Title)`
    margin: 0 auto 24px 0;
    width: max-content;
`;

export const FormWrapper = styled.div`
`;

export const DurationList = styled(Ul)`
    display: grid;
    grid-auto-flow: column;
    grid-gap: 12px;
    max-width: min-content;
    margin: 0 0 24px 0;
`;

export const FormButton = styled(Button)`
    margin: auto 0 0 0;
`;

export const RadioLabelForTime = styled.span`
  display: flex;
  height: 44px;
  width: 44px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  transition: color 0.2s ease-out, background-color 0.2s ease-out;
  ${(props) =>
    props.$isChecked
      ? css`
          background-color: ${props.theme.colorButton};
          color: ${props.theme.colorWhite};
        `
      : css`
          background-color: ${props.theme.colorBackgroundGrey};
          color: ${props.theme.colorBlack};
          cursor: pointer;
        `}
`;

export const RadioLabelForType = styled.span`
    display: flex;
    position: relative;
    height: 44px;
    width: min-content;
    padding: 0 0 0 46px;
    justify-content: center;
    align-items: center;

    &:after {
        position: absolute;
        display: block;
        content: "";
        width: 18px;
        height: 18px;
        color: ${(props) => props.theme.colorBlack};
        border: 1px solid ${(props) => props.theme.colorButton};
        border-radius: 50px;
        top: 0;
        left: 0;
        bottom: 0;
        margin: auto auto auto 20px;
    }
    ${(props) => 
    props.$isChecked
        ? css`
            &:before {
                position: absolute;
                display: block;
                content: "";
                width: 12px;
                height: 12px;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto auto auto 24px;
                background-color: ${(props) => props.theme.colorButton};
                border-radius: 50px;
            }

        `
        : css`
            cursor: pointer;
        `}
`;

export const TextComponent = styled.div`
    padding: 0 20px 0 20px;
    margin: 0 0 24px 0;

    & ul {
        list-style-type: disc;
        padding: 0 0 0 16px;
    }
`;

export const Price = styled.input`
    font-size: 24px;
    line-height: 27.6px;
    font-weight: 700;
    margin: 0 0 40px 0;
    color: ${(props) => props.theme.colorBlack};
    border: none;

    &:focus-visible {
        outline: none;
    }
`;